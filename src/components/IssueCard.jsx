import { ThumbsUp, MapPin, Zap } from 'lucide-react';

const urgencyColors = {
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  High: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Low: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

export default function IssueCard({ issue, onUpvote }) {
  return (