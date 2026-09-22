import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LocationPicker } from './MapView';
import { Send, X } from 'lucide-react';

export default function ReportModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Potholes & Roads');
  const [urgency, setUrgency] = useState('Medium');
  const [locationName, setLocationName] = useState('Akurdi, PCMC');
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState({ lat: 18.6278, lng: 73.8131 });

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return alert('Please enter an issue title!');

    onSubmit({
      title,
      category,
      urgency,
      location_name: locationName,
      description,
      latitude: coords.lat,
      longitude: coords.lng,
      status: 'Open',
      xp_reward: 200,
      upvotes: 1
    });

    setTitle('');
    setDescription('');
    onClose();
  }

  return (