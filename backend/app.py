from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() in ('true', '1')
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER', os.getenv('MAIL_USERNAME'))

mail = Mail(app)

# Root route for testing
@app.route('/')
def index():
    return "Flask server is running!"

# Contact form endpoint
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not (name and email and message):
        return jsonify({"error": "Please fill out all fields."}), 400

    try:
        msg = Message(
            subject=f"Contact Form Submission from {name}",
            sender=email,
            recipients=[app.config['MAIL_DEFAULT_SENDER']],
            body=f"Message from {name} ({email}):\n\n{message}"
        )
        mail.send(msg)
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": "Failed to send message."}), 500

if __name__ == '__main__':
    app.run(debug=True)
