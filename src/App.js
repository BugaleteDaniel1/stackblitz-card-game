import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

/// deck id = k88y4jdrnoo4

export default function App() {
  useEffect(() => {
    async function getDeck() {
      const req = await fetch('https://www.deckofcardsapi.com/api/deck/new/');
      const resp = await req.json();
    }
    getDeck();
    return () => {
      getDeck();
    };
  });

  useEffect(() => {
    async function drawCards() {
      const reqCards = await fetch(
        'https://www.deckofcardsapi.com/api/deck/k88y4jdrnoo4/draw/?count=5'
      );
      const cards = await reqCards.json();
      console.log(cards);
    }
    drawCards();
    return () => {
      drawCards();
    };
  });

  return (
    <div>
      <div className="cards">this is the deck</div>
    </div>
  );
}
