import { Trophy, Medal, Award, X } from 'lucide-react';

const topUsers = [
  { rank: 1, name: 'Aarav Sharma', area: 'Akurdi, PCMC', xp: 2450, level: 'Civic Guardian' },
  { rank: 2, name: 'Priya Deshmukh', area: 'Baner, Pune', xp: 1980, level: 'Urban Hero' },
  { rank: 3, name: 'Rohan Patil', area: 'Wakad, PCMC', xp: 1620, level: 'Community Scout' },
  { rank: 4, name: 'Aashutosh D.', area: 'Pimpri, PCMC', xp: 1300, level: 'Active Signal' },
];

export default function Leaderboard({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (