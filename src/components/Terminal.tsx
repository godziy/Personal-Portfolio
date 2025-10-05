import { useState, useRef, useEffect } from 'react';
import { TerminalOutput } from './TerminalOutput';
import { MatrixEffect } from './MatrixEffect';
import { parseCommand, getCommandList } from '@/lib/commands';

export const Terminal = () => {
  const [input, setInput] = useState('');
const [history, setHistory] = useState<Array<{ command: string; output: JSX.Element | string; skipTyping?: boolean }>>([]);  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showMatrix, setShowMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = (
  <div className="mb-4">
    <p className="terminal-glow mb-2">Welcome to Chayan's Portfolio Terminal</p>
    <p className="text-muted-foreground mb-2">Type 'help' to see available commands</p>
    <p className="text-muted-foreground">Or click on the command shortcuts below ↓</p>
  </div>
);

useEffect(() => {
  // Show welcome message on mount
  setHistory([{ command: '', output: welcomeMessage, skipTyping: true }]);
}, []);

  useEffect(() => {
    // Auto-scroll to bottom when history updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const result = parseCommand(trimmedInput);
    const output = (result ?? '') as JSX.Element | string;
     const safeOutput = (typeof output === 'string'
       ? output.replace(/(?:\r?\n)?undefined\s*$/i, '')
       : output);
     
    
    // Handle special commands
    if (safeOutput === 'CLEAR_TERMINAL') {
  setHistory([{ command: '', output: welcomeMessage }]);
  setInput('');
  return;
}
    
    if (safeOutput === 'MATRIX_EFFECT') {
      setShowMatrix(true);
      setTimeout(() => setShowMatrix(false), 5000);
      setInput('');
      return;
    }
    
    setHistory([...history, { command: trimmedInput, output: safeOutput }]);
    setCommandHistory([...commandHistory, trimmedInput]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  const executeCommand = (cmd: string) => {
    setInput(cmd);
    setTimeout(() => {
      const result = parseCommand(cmd);
      const output = (result ?? '') as JSX.Element | string;
      const safeOutput = (typeof output === 'string'
        ? output.replace(/(?:\r?\n)?undefined\s*$/i, '')
        : output);
      
      
      // Handle special commands
      if (safeOutput === 'CLEAR_TERMINAL') {
  setHistory([{ command: '', output: welcomeMessage }]);
  setInput('');
  return;
}
      
      if (safeOutput === 'MATRIX_EFFECT') {
        setShowMatrix(true);
        setTimeout(() => setShowMatrix(false), 5000);
        setInput('');
        return;
      }
      
      setHistory([...history, { command: cmd, output: safeOutput }]);
      setCommandHistory([...commandHistory, cmd]);
      setInput('');
    }, 100);
  };

  const commands = getCommandList();

  return (
    <div className="h-full flex flex-col bg-black/95 backdrop-blur-sm relative">
      {showMatrix && <MatrixEffect />}
      
      {/* Command shortcuts bar */}
      <div className="border-b border-primary/30 p-2 flex flex-wrap gap-2">
        {commands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-colors terminal-glow"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal output area */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 scanline"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.command && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent">visitor@portfolio:~$</span>
                <span className="terminal-glow">{entry.command}</span>
              </div>
            )}
            <TerminalOutput content={entry.output} skipTyping={entry.skipTyping} />
          </div>
        ))}

        {/* Input line */}
         <form onSubmit={handleSubmit} className="flex items-center gap-2">
           <span className="text-accent">visitor@portfolio:~$</span>
           <div className="relative flex-1 font-mono" onClick={() => inputRef.current?.focus()}>
             <input
               ref={inputRef}
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleKeyDown}
               className="w-full bg-transparent outline-none caret-transparent text-transparent selection:bg-primary/30"
               autoFocus
               spellCheck={false}
             />
             <div className="pointer-events-none absolute inset-0 terminal-glow">
               <span className="whitespace-pre-wrap">{input}</span>
               <span className="terminal-cursor" aria-hidden="true"></span>
             </div>
           </div>
         </form>
      </div>
    </div>
  );
};
