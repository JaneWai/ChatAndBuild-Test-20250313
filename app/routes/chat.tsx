import { useState } from "react";
import { Form } from "@remix-run/react";

export default function Chat() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How are you feeling today?", isUser: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold text-gray-900">Supportive Chat</h1>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <Form
            method="post"
            className="p-4 border-t"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const message = formData.get("message") as string;
              
              if (message.trim()) {
                setMessages((prev) => [
                  ...prev,
                  { text: message, isUser: true },
                  { text: "I understand how you feel. Would you like to talk more about it?", isUser: false },
                ]);
                form.reset();
              }
            }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                name="message"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
