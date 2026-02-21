import { useState, useEffect } from 'react';
import { latestMessages, latestSongs } from '../data/mockData';

export const useLatestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get latest 5 messages, ordered by date (newest first)
      const sortedMessages = [...latestMessages]
        .sort((a, b) => b.createdDate - a.createdDate)
        .slice(0, 5);
      
      setMessages(sortedMessages);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { messages, loading };
};

export const useLatestSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get latest 5 songs, ordered by date (newest first)
      const sortedSongs = [...latestSongs]
        .sort((a, b) => b.createdDate - a.createdDate)
        .slice(0, 5);
      
      setSongs(sortedSongs);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { songs, loading };
};
