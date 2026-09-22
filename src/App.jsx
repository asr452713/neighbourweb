import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import IssueCard from './components/IssueCard';
import MapView from './components/MapView';
import ReportModal from './components/ReportModal';
import Leaderboard from './components/Leaderboard';
import { Trophy } from 'lucide-react';

export default function App() {
  const [issues, setIssues] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [userXp, setUserXp] = useState(1300);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  useEffect(() => {
    fetchIssues();
  }, []);

  async function fetchIssues() {
    const { data, error } = await supabase
      .from('issues')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setIssues(data);
    }
  }

  async function handleUpvote(id, currentUpvotes) {
    const updatedCount = (currentUpvotes || 0) + 1;
    setIssues(prev => prev.map(issue => issue.id === id ? { ...issue, upvotes: updatedCount } : issue));

    const { error } = await supabase
      .from('issues')
      .update({ upvotes: updatedCount })
      .eq('id', id);

    if (error) fetchIssues();
  }

  async function handleCreateIssue(newIssue) {
    const { error } = await supabase.from('issues').insert([newIssue]);
    if (!error) {
      setUserXp(prev => prev + 50);
      fetchIssues();
    } else {
      alert('Error inserting record: ' + error.message);
    }
  }

  const filteredIssues = issues.filter(i => {
    const matchesCategory = selectedCategory === 'All' || i.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || i.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (