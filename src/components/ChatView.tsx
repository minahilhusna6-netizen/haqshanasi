import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, RefreshCw, AlertCircle, Info, ShieldCheck } from 'lucide-react';

export const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Assalamu Alaikum! I am **HaqShanasi** (حق شناسی), your warm legal rights companion. 

I am here to guide you with clear, respectful, and actionable legal information regarding:
• **Marriage & Nikahnama Rights** (Columns 18-22, Talaq-e-Tafweez, Mahr)
• **Divorce & Khula Procedures** (Family Court filings, Iddat, Child Custody)
• **Inheritance Shares & Land Protection** (Islamic shares, Section 498A PPC)
• **Workplace Harassment Complaints** (2010 Act, Ombudsperson FPOAH)
• **Domestic Violence & Protection Orders** (Restraining orders, Darul Aman shelters)

You can type your questions in **English** or **Urdu** (اردو میں سوال پوچھیں).

*Note: I provide general legal literacy and informational guidance under Pakistani laws, not formal courtroom representation.*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setErrorMsg(null);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: query,
          history: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();

      const aiMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.response || 'I am sorry, I could not process that query. Please try rephrasing your question.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: data.isFallback
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error('Chat API Error:', err);
      setErrorMsg('Connection to legal assistant temporarily interrupted.');

      const fallbackAiMessage: ChatMessage = {
        id: `assistant-err-${Date.now()}`,
        role: 'assistant',
        content: `Assalamu Alaikum. I encountered a network error while connecting. 

In the meantime, here is key guidance:
• **Women Helpline**: Call **1099** (Ministry of Human Rights) for free legal guidance.
• **Nikahnama Column 18**: Ensure "Yes" is written to retain delegated right of divorce.
• **Inheritance**: Female shares are guaranteed under Shariah and Section 498A PPC.

Please try sending your message again.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: true
      };

      setMessages((prev) => [...prev, fallbackAiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    "What clauses should I make sure are written in my Nikahnama?",
    "How does Khula work in a Pakistani Family Court?",
    "What is my legal share in my father's property under Pakistani law?",
    "How do I file a workplace harassment complaint with the Ombudsperson?",
    "What protection orders can I get if facing domestic abuse at home?",
    "نکاح نامہ کے کالم 18 میں طلاقِ تفویض کی کیا اہمیت ہے؟"
  ];

  // Simple Markdown Renderer Helper for formatted text
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold rendering
      let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      if (line.trim().startsWith('•') || line.trim().startsWith('*') || line.trim().startsWith('-')) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1 pl-2">
            <span className="text-[#B85C38] font-bold">•</span>
            <span dangerouslySetInnerHTML={{ __html: processedLine.replace(/^[\bullet\*\-]\s*/, '') }} />
          </div>
        );
      }

      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-1" dangerouslySetInnerHTML={{ __html: processedLine }} />
      );
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header & Disclaimer */}
      <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-5 space-y-2">
        <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#B85C38] text-white flex items-center justify-center font-bold font-serif text-lg">
              حق
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                HaqShanasi AI Legal Companion
              </h1>
              <p className="text-xs text-[#4A4A4A]">
                Instant Legal Literacy & Guidance for Women in Pakistan
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs text-[#6B7F59] font-semibold bg-[#E8EFE3] px-3 py-1.5 border border-[#6B7F59]/30">
            <ShieldCheck className="w-4 h-4 text-[#B85C38]" />
            <span>Pakistani Statutory Laws & Shariah Reference</span>
          </div>
        </div>

        <div className="text-xs text-[#4A4A4A] flex items-center space-x-2 pt-1">
          <Info className="w-4 h-4 text-[#B85C38] shrink-0" />
          <span>
            HaqShanasi provides legal information based on Pakistani laws. For active court proceedings, consult an Advocate or call Helpline 1099.
          </span>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] flex flex-col h-[650px] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
        
        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#FAF8F5]">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                {/* Sender Tag */}
                <div className="flex items-center space-x-2 text-[11px] font-mono text-[#4A4A4A] mb-1">
                  <span>{isUser ? 'YOU' : 'HAQSHANASI AI (حق شناسی)'}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                {/* Bubble Container */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 sm:p-5 text-sm sm:text-base leading-relaxed border-2 ${
                    isUser
                      ? 'bg-[#B85C38] text-white border-[#1A1A1A] rounded-none shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]'
                      : 'bg-[#E8EFE3] text-[#1A1A1A] border-[#6B7F59] rounded-none shadow-[3px_3px_0px_0px_rgba(107,127,89,0.4)]'
                  }`}
                >
                  <div className="space-y-1 font-sans">
                    {renderFormattedContent(msg.content)}
                  </div>

                  {msg.isFallback && (
                    <div className="mt-3 pt-2 border-t border-[#6B7F59]/30 text-[11px] text-[#4C5B3F] font-mono">
                      [Offline Guidance Mode]
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex flex-col items-start space-y-1">
              <div className="text-[11px] font-mono text-[#4A4A4A]">HAQSHANASI AI IS THINKING...</div>
              <div className="bg-[#E8EFE3] border-2 border-[#6B7F59] p-4 text-sm text-[#1A1A1A] flex items-center space-x-3">
                <RefreshCw className="w-4 h-4 text-[#B85C38] animate-spin" />
                <span className="font-serif italic text-sm">Reviewing relevant Pakistani statutes and case law...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="border-t border-[#1A1A1A]/20 bg-[#EFE8DC] p-3 overflow-x-auto whitespace-nowrap space-x-2 flex items-center">
          <span className="text-[11px] font-mono uppercase text-[#B85C38] font-bold shrink-0 mr-1">
            SUGGESTED QUESTIONS:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="bg-[#FAF8F5] hover:bg-[#B85C38] hover:text-white text-[#1A1A1A] text-xs py-1 px-3 border border-[#1A1A1A] transition-colors shrink-0 cursor-pointer disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar Area */}
        <div className="border-t-2 border-[#1A1A1A] p-3 sm:p-4 bg-[#FAF8F5]">
          {errorMsg && (
            <div className="mb-2 text-xs text-red-700 font-semibold flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex items-end space-x-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask any legal question regarding Nikahnama, Khula, inheritance, workplace harassment... (Enter to send, Shift+Enter for newline)"
              rows={2}
              className="flex-1 bg-[#FAF8F5] text-[#1A1A1A] p-3 text-sm border-2 border-[#1A1A1A] focus:outline-none focus:border-[#B85C38] resize-none font-sans"
            />

            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="bg-[#B85C38] hover:bg-[#9A4A2B] disabled:bg-[#1A1A1A]/30 text-white font-bold p-3 sm:px-6 h-[58px] border-2 border-[#1A1A1A] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Send</span>
            </button>
          </div>

          <div className="flex justify-between items-center text-[11px] text-[#4A4A4A] mt-2 px-1">
            <span>Supports English & Urdu queries</span>
            <span>Emergency Helpline: <strong>1099</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
};
