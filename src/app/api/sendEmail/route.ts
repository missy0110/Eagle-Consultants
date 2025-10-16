import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, service, budget, message } = await req.json();

    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;

    if (!mailUser || !mailPass) {
      return new Response(
        JSON.stringify({ message: "Email configuration error" }),
        { status: 500 }
      );
    }

    // More specific transporter configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      requireTLS: true,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false
      },
      logger: true, // This will log the SMTP conversation
      debug: true // This will show debug information
    });

    console.log('Testing SMTP connection...');

    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const mailOptions = {
      from: `"Eagle Consultants" <${mailUser}>`,
      to: mailUser,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Service: ${service}
        Budget: ${budget}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    console.log('Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed email error:", error);
    
    // More specific error handling
    let errorMessage = "Failed to send email";
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = "Email authentication failed. Check your app password.";
      } else if (error.message.includes('self-signed certificate')) {
        errorMessage = "Network security issue. Please try again.";
      } else {
        errorMessage = error.message;
      }
    }

    return new Response(
      JSON.stringify({ 
        message: errorMessage
      }),
      { status: 500 }
    );
  }
}