# Deploying a React App on AWS EC2

This guide provides a step-by-step approach to deploying a React application on an AWS EC2 instance. 
![](/images/crm-tb.png) 

## Prerequisites

Before starting, ensure you have:
- An AWS account
- Basic knowledge of React and AWS
- Node.js and npm installed on your local machine

## Steps

### 1. Launch an EC2 Instance

1. **Log in to AWS Management Console**
   - Access the AWS Management Console from your web browser.

2. **Navigate to the EC2 Dashboard**
   - Select "EC2" from the AWS services menu.

3. **Launch a New Instance**
   - Click on "Launch Instance."
   - Choose an Amazon Machine Image (AMI). For this guide, select the Amazon Linux 2 AMI.
   - Select an instance type. The `t2.micro` instance type is sufficient for small applications.
   - Configure instance details and adjust storage settings as needed.
   - Add tags (optional) and configure the security group to allow HTTP (port 80) and SSH (port 22) traffic.
   - Review your settings and launch the instance. Create a new key pair or use an existing one for SSH access.

### 2. Connect to Your EC2 Instance

1. **Select Your Instance**
   - Go to the EC2 Dashboard, find your newly launched instance, and select it.

2. **Connect Using SSH**
   - Click on "Connect" to get the SSH connection instructions.
   - Use an SSH client to connect to the instance with the provided command.

### 3. Install Required Software

1. **Update Package Index**
   - Run the following command to update the package index:

     ```bash
     sudo yum update -y
     ```

2. **Install Node.js and npm**
   - Install Node.js and npm using the following command:

     ```bash
     sudo amazon-linux-extras install nodejs10
     ```

   - Verify the installation:

     ```bash
     node -v
     npm -v
     ```

### 4. Set Up Your React Application

1. **Transfer Project Files**
   - Clone your React application repository or transfer your project files to the EC2 instance.

2. **Navigate to Your Project Directory**
   - Use `cd` to navigate to the directory where your React app is located:

     ```bash
     cd /path/to/your/react-app
     ```

3. **Install Project Dependencies**
   - Run `npm install` to install the required dependencies:

     ```bash
     npm install
     ```

4. **Build the React Application**
   - Generate the production build of your application:

     ```bash
     npm run build
     ```

### 5. Install and Configure a Web Server

1. **Install Nginx**
   - Install Nginx using the following command:

     ```bash
     sudo amazon-linux-extras install nginx1.12
     ```

2. **Start and Enable Nginx**
   - Start the Nginx service and enable it to start on boot:

     ```bash
     sudo service nginx start
     sudo systemctl enable nginx
     ```

3. **Configure Nginx to Serve Your React App**
   - Edit the Nginx configuration file:

     ```bash
     sudo nano /etc/nginx/nginx.conf
     ```

   - Add the following server block to the configuration:

     ```nginx
     server {
         listen 80;
         server_name your_domain_or_IP;

         location / {
             root /path/to/your/react-app/build;
             try_files $uri /index.html;
         }
     }
     ```

   - Save and exit the editor. Restart Nginx to apply the new configuration:

     ```bash
     sudo service nginx restart
     ```

### 6. Test Your Application

1. **Access Your Application**
   - Open a web browser and navigate to your EC2 instance's public IP or domain name.
   - Verify that your React application is being served correctly.
  
   # CRM Dashboard
    ![](/images/crm-db.png)
   # CRM Rergister
   - ![](/images/crm-register.png) 

## Conclusion

You have successfully deployed your React application on an AWS EC2 instance. Your app should now be accessible via the public IP or domain name associated with your EC2 instance.

## Additional Resources

- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/index.html)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Nginx Documentation](https://nginx.org/en/docs/)

Feel free to adapt and expand this guide as needed for your deployment requirements.
