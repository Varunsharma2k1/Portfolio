resource "aws_dynamodb_table" "newsletter" {
  name         = "newsletter_subscribers"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "email"

  attribute {
    name = "email"
    type = "S"
  }

  tags = {
    Name = "Newsletter Table"
  }
}
resource "aws_iam_role" "lambda_exec" {
  name = "lambda_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

resource "aws_lambda_function" "subscribe_email" {
  function_name = "subscribeEmail"
  handler       = "subscribe.handler"
  runtime       = "nodejs16.x"
  role          = aws_iam_role.lambda_exec.arn
  filename      = "${path.module}/lambda.zip"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.newsletter.name
    }
  }
}

resource "aws_apigatewayv2_api" "http_api" {
  name          = "newsletter-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.subscribe_email.invoke_arn
  integration_method = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "subscribe_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /subscribe"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.subscribe_email.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

output "newsletter_api_url" {
  value       = aws_apigatewayv2_api.http_api.api_endpoint
  description = "The base URL of the Newsletter API Gateway"
}

