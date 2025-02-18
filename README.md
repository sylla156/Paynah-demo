**Project Title:** Hub2 Web Application

**Description:**
Hub2 is a web application designed to provide a seamless user experience for managing transactions, payments, and refunds. Built with modern web technologies, it features a responsive design to ensure optimal usability across various devices.

**Table of Contents:**

1. [Installation Instructions](#installation-instructions)
2. [Usage](#usage)
3. [Dependencies](#dependencies)
4. [Configuration](#configuration)
5. [Webhook Configuration](#webhook-configuration)
6. [Contributing Guidelines](#contributing-guidelines)

**Prerequisites:**

- Docker
- Docker Compose
- Git

**Installation Instructions:**

1. Clone the repository: `git clone https://gitlab.com/ibrahim.sylla/hub2-web-app-demo.git`
2. Enter the repository: `cd hub2-web-app`
3. Copy the environment template: `cp infra/config/.env.dist .env`
4. Edit the ⁠.env file with your specific configuration
5. Start the application in development mode: `make run`
6. Stop the running containers: `make stop`



**Usage:**

1. Open your web browser and navigate to the application's host and port (e.g., `http://localhost:3000`)
2. Explore the application's features, including transaction management, payment processing, and refund handling

**Dependencies:**
- Docker
- Docker Compose

**Configuration:**
The following environment variables are required:

- `HOST`: The URL of the application (e.g., `http://localhost:3000`)
- `MONGODB_URI`: The connection string for the MongoDB database
- `HUB2_API_URL`: The URL of the Hub2 API
- `HUB2_APIKEY`: The API key for the Hub2 API
- `HUB2_MERCHANTID`: The merchant ID for the Hub2 API
- `HUB2_ENVIRONMENT`: The environment for the Hub2 API (e.g., `sandbox` or `production`)
- `HUB2_WEBHOOK_SECRET_KEY_TRANSFER`: The secret key for transfer webhooks
- `HUB2_WEBHOOK_SECRET_KEY_PAYMENT`: The secret key for payment webhooks
- `NEXT_PUBLIC_PUSHER_APP_ID`: The Pusher app ID
- `NEXT_PUBLIC_PUSHER_KEY`: The Pusher key
- `NEXT_PUBLIC_PUSHER_SECRET`: The Pusher secret
- `NEXT_PUBLIC_PUSHER_CHANNEL`: The Pusher channel
- `NEXT_PUBLIC_PUSHER_EVENT_TRANSFER`: The Pusher event for transfers
- `NEXT_PUBLIC_PUSHER_EVENT_PAYMENT`: The Pusher event for payments
- `NEXT_PUBLIC_PUSHER_CLUSTER`: The Pusher cluster

Create a new file named `.env` in the project root and populate it with the required environment variables. For example:

```bash
HOST=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/hub2
HUB2_API_URL=https://api.hub2.com
HUB2_APIKEY=your-api-key
HUB2_MERCHANTID=your-merchant-id
HUB2_ENVIRONMENT=sandbox
HUB2_WEBHOOK_SECRET_KEY_TRANSFER=your-secret-key
HUB2_WEBHOOK_SECRET_KEY_PAYMENT=your-secret-key
NEXT_PUBLIC_PUSHER_APP_ID=your-app-id
NEXT_PUBLIC_PUSHER_KEY=your-key
NEXT_PUBLIC_PUSHER_SECRET=your-secret
NEXT_PUBLIC_PUSHER_CHANNEL=your-channel
NEXT_PUBLIC_PUSHER_EVENT_TRANSFER=transfer
NEXT_PUBLIC_PUSHER_EVENT_PAYMENT=payment
NEXT_PUBLIC_PUSHER_CLUSTER=your-cluster
```

**Webhook Configuration:**

To receive callbacks from the Hub2 API, you need to configure webhooks on the Hub2 API side. Follow these steps:

1. Log in to your Hub2 API account and navigate to the Webhooks settings.
2. Create two new webhooks using the [Hub2 documentation endpoint](https://docs.hub2.io/api-reference/webhooks/create-a-webhook):
   - For transfers: `https://your-domain-name.com/api/callback/transfer` (replace `your-domain-name.com` with the domain name of your website)
   - For payments: `https://your-domain-name.com/api/callback/payment` (replace `your-domain-name.com` with the domain name of your website)
3. After creating the webhooks, obtain the secret keys for each webhook from the response. You will need these keys to verify the authenticity of incoming callbacks.

**Environment Variables:**

To store the secret keys, update your `.env` file with the following variables:

- `HUB2_WEBHOOK_SECRET_KEY_TRANSFER`: The secret key for the transfer webhook
- `HUB2_WEBHOOK_SECRET_KEY_PAYMENT`: The secret key for the payment webhook

Example:

```bash
HUB2_WEBHOOK_SECRET_KEY_TRANSFER=your-transfer-secret-key
HUB2_WEBHOOK_SECRET_KEY_PAYMENT=your-payment-secret-key
```

**Verification Process:**

When a callback is received, the endpoint will verify the signature of the request using the secret key. If the signature is valid, the endpoint will process the callback data. If the signature is invalid, the endpoint will reject the callback.

By following these steps, you will be able to receive callbacks from Hub2 API and process them securely using the secret keys stored in your `.env` file.

**Contributing Guidelines:**

We welcome contributions to the Hub2 Web Application! If you'd like to submit an issue or pull request, please follow these guidelines:

1. Make your changes and commit them with a clear and concise commit message.
2. Open a pull request and describe the changes you've made.
3. Wait for review and feedback from the maintainers.

If you have any questions or need help, feel free to ask!
