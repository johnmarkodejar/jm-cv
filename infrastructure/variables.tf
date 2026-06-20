variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "ap-southeast-1" # Singapore — closest to PH
}

variable "app_name" {
  description = "Application name used for resource naming"
  type        = string
  default     = "jm-cv"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.small"
}

variable "ami_id" {
  description = "Ubuntu 24.04 LTS AMI ID (ap-southeast-1)"
  type        = string
  default     = "ami-0497a974f8d5dcef8" # Ubuntu 24.04 LTS in ap-southeast-1
}

variable "public_key_path" {
  description = "Path to your SSH public key file"
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}
