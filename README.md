# Portfolio Chat

A modern, interactive portfolio website built with Next.js and integrated with AI capabilities. This project showcases skills, experience, and projects with smooth animations and responsive design.

## 🌟 Features

- **AI-Powered Chat Interface**: Interactive conversation with an AI that can discuss my skills, projects, and experience
- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- **Smooth Animations**: Uses Framer Motion for fluid transition effects
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Dark/Light Mode**: Supports theme switching for comfortable viewing
- **Project Showcase**: Highlights key projects with descriptions and technology stacks
- **Skills Section**: Visual representation of technical competencies
- **Timeline Section**: Career and education history in an interactive format

## 🤖 AI Integration

This portfolio uses OpenAI's technology to power the chat interface, allowing visitors to:

- Ask questions about my skills and experience
- Get information about the showcased projects
- Learn more about my background and qualifications
- Receive detailed explanations of technologies used

The AI has been trained with specific information about my work and skills to provide relevant responses.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- pnpm (v8.0.0 or higher)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BDKX16/portfolio-chat.git
   cd portfolio-chat
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_N8N_WEBHOOK=your-n8n-ia-agent-workflow-url
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Using Docker

Alternatively, you can use Docker to run the application:

1. Build the Docker image:

   ```bash
   docker build -t portfolio-chat .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 portfolio-chat
   ```

Or use docker-compose:

```bash
docker-compose up
```

## 📦 Project Structure

- `/app`: Next.js app directory with layout and page components
- `/components`: Reusable UI components including the chat interface
- `/public`: Static assets like images
- `/lib`: Utility functions and helpers
- `/hooks`: Custom React hooks

## 🛠️ Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **AI Integration**: OpenAI API
- **Containerization**: Docker
- **Automation**: n8n

## 📋 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

Feel free to reach out if you have any questions or would like to connect!

- GitHub: [BDKX16](https://github.com/BDKX16)
