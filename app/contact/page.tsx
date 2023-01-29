'use client';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import * as gtag from '../../lib/gtag';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      gtag.event({
        action: 'submit_form',
        category: 'Contact',
        label: message,
      });

      setMessage('');
    },
    [message]
  );

  return (
    <main>
      <h1>This is the Contact page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Message:</span>
          <textarea onChange={(e) => handleInput(e)} value={message} />
        </label>
        <button type='submit'>submit</button>
      </form>
    </main>
  );
}
