import { useState, useEffect, useRef } from 'react';

interface TerminalOutputProps {
  content: string | JSX.Element;
  typingSpeed?: number;
  skipTyping?: boolean;
}

export const TerminalOutput = ({ content, typingSpeed = 8, skipTyping = false }: TerminalOutputProps) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If skipTyping is true, show content immediately
    if (skipTyping) {
      if (typeof content === 'string') {
        setDisplayedContent(content);
        setIsTyping(false);
      } else {
        setShowContent(true);
        setIsTyping(false);
      }
      return;
    }
    // Only apply typing effect to string content
    if (typeof content === 'string') {
      setIsTyping(true);
      setDisplayedContent('');
      setShowContent(false);
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < content.length) {
          setDisplayedContent(content.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    } else {
      // For JSX content, get text content and type it out
      setShowContent(false);
      setIsTyping(true);
      setDisplayedContent('');
      
      // Use a small delay to get the text content
      setTimeout(() => {
        if (contentRef.current) {
          const textContent = contentRef.current.innerText || contentRef.current.textContent || '';
          
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex < textContent.length) {
              setDisplayedContent(textContent.substring(0, currentIndex + 1));
              currentIndex++;
            } else {
              setIsTyping(false);
              setShowContent(true);
              clearInterval(interval);
            }
          }, typingSpeed);
        }
      }, 10);
    }
  }, [content, typingSpeed]);

  // Hidden render to extract text content
  if (typeof content !== 'string' && !showContent) {
    return (
      <>
        <div ref={contentRef} className="hidden">
          {content}
        </div>
        <div className="whitespace-pre-wrap">
          {displayedContent}
          {isTyping && <span className="terminal-cursor" aria-hidden="true"></span>}
        </div>
      </>
    );
  }

  // If content is JSX and typing is done, render it directly
  if (typeof content !== 'string' && showContent) {
    return <div className="whitespace-pre-wrap">{content}</div>;
  }

  // String content with typing effect
  return (
    <div className="whitespace-pre-wrap">
      {displayedContent}
      {isTyping && <span className="terminal-cursor" aria-hidden="true"></span>}
    </div>
  );
};