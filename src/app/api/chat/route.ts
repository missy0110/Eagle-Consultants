export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage.content.toLowerCase();

    // Simple rule-based responses
    let response = "";
    
    if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
      response = "Hello! 👋 I'm Eagle, your friendly AI assistant from Eagle Consultants. How can I help you today?";
    } 
    else if (userMessage.includes('service') || userMessage.includes('offer') || userMessage.includes('provide')) {
      response = "We offer comprehensive web development and IT consulting services! 🚀 This includes custom websites, web applications, and technology solutions tailored to your business needs.";
    }
    else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('budget')) {
      response = "Our projects typically range from $1,000 to $5,000+ depending on complexity. For a precise quote, I'd recommend filling out our contact form so we can understand your specific requirements! 💰";
    }
    else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('phone')) {
      response = "You can reach us at hello@eagleconsultants.com or call +91 98765 43210. We're based in Bangalore, India and typically respond within 24 hours! 📞";
    }
    else if (userMessage.includes('time') || userMessage.includes('response') || userMessage.includes('hours')) {
      response = "We respond to all inquiries within 24 hours! ⏰ Our office hours are Monday to Friday, 8am–6pm IST.";
    }
    else if (userMessage.includes('trouble') || userMessage.includes('problem') || userMessage.includes('error') || userMessage.includes('help')) {
      response = "I'm sorry you're experiencing issues! 🤔 For technical problems, please try refreshing the page. If the issue persists, use our contact form or WhatsApp for immediate human assistance.";
    }
    else if (userMessage.includes('website') || userMessage.includes('web development')) {
      response = "We create stunning, responsive websites that work perfectly on all devices! Our web development services include frontend, backend, and full-stack solutions using modern technologies. 💻";
    }
    else if (userMessage.includes('experience') || userMessage.includes('years')) {
      response = "We have 5+ years of experience delivering successful projects for 50+ happy clients! 🏆 We've completed over 200 projects with proven results.";
    }
    else {
      response = "I'd love to help! While I'm a simple assistant, our team at Eagle Consultants can answer more complex questions. Could you tell me more about what you're looking for, or would you prefer to speak directly with our experts via the contact form? 😊";
    }

    // Simulate streaming response
    const stream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        const words = response.split(' ');
        let index = 0;

        function pushWord() {
          if (index < words.length) {
            const word = words[index] + (index < words.length - 1 ? ' ' : '');
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: word })}\n\n`));
            index++;
            setTimeout(pushWord, 50 + Math.random() * 100); // Random delay for natural feel
          } else {
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          }
        }

        pushWord();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat message' }),
      { status: 500 }
    );
  }
}