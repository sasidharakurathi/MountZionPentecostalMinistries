import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Video,
    CalendarDays,
    MessageSquare,
    LogOut,
    Plus,
    Trash2
} from 'lucide-react';
import './Admin.css';

// --- Static Mock Data ---
const initialSermons = [
    { id: 1, title: 'The Power of Faith', date: 'Oct 15, 2025', views: 1204 },
    { id: 2, title: 'Walking in Love', date: 'Oct 22, 2025', views: 890 }
];

const initialEvents = [
    { id: 1, title: 'Special Healing Service', date: 'April 20, 2025' },
    { id: 2, title: 'Youth Revival Camp', date: 'May 15, 2025' }
];

const mockMessages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'I need prayer for my family.', date: 'Today, 10:30 AM' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', message: 'What time is the Sunday service?', date: 'Yesterday' }
];

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sermons, setSermons] = useState(initialSermons);
    const [events, setEvents] = useState(initialEvents);

    const handleDeleteSermon = (id) => {
        setSermons(sermons.filter(s => s.id !== id));
    };

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(e => e.id !== id));
    };

    const handleAddSermon = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        if (!title) return;
        const newSermon = { id: Date.now(), title, date: new Date().toLocaleDateString(), views: 0 };
        setSermons([newSermon, ...sermons]);
        e.target.reset();
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const date = e.target.date.value;
        if (!title || !date) return;
        const newEvent = { id: Date.now(), title, date };
        setEvents([newEvent, ...events]);
        e.target.reset();
    };

    // --- Render Functions ---

    const renderDashboard = () => (
        <div className="admin-panel fadeIn">
            <h2>Welcome back, Pastor!</h2>
            <p className="admin-subtitle">Here is an overview of your church platform.</p>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon purple"><Video /></div>
                    <div className="stat-info">
                        <h3>{sermons.length}</h3>
                        <p>Total Sermons</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green"><CalendarDays /></div>
                    <div className="stat-info">
                        <h3>{events.length}</h3>
                        <p>Upcoming Events</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon blue"><MessageSquare /></div>
                    <div className="stat-info">
                        <h3>{mockMessages.length}</h3>
                        <p>New Messages</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSermons = () => (
        <div className="admin-panel fadeIn">
            <div className="panel-header">
                <h2>Manage Sermons</h2>
            </div>

            <div className="admin-card">
                <h3>Add New Sermon</h3>
                <form className="admin-form" onSubmit={handleAddSermon}>
                    <input type="text" name="title" placeholder="Sermon Title / Youtube Video ID" />
                    <button type="submit" className="admin-btn primary"><Plus size={18} /> Add Sermon</button>
                </form>
            </div>

            <div className="admin-card">
                <h3>Current Sermons</h3>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {sermons.map(s => (
                                <motion.tr
                                    key={s.id}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <td>{s.title}</td>
                                    <td>{s.date}</td>
                                    <td>
                                        <button className="icon-btn delete" onClick={() => handleDeleteSermon(s.id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderEvents = () => (
        <div className="admin-panel fadeIn">
            <div className="panel-header">
                <h2>Manage Events</h2>
            </div>

            <div className="admin-card">
                <h3>Add a New Event</h3>
                <form className="admin-form" onSubmit={handleAddEvent}>
                    <div className="form-row">
                        <input type="text" name="title" placeholder="Event Name (e.g. Youth Camp)" />
                        <input type="text" name="date" placeholder="Date (e.g. June 15, 2025)" />
                    </div>
                    <button type="submit" className="admin-btn primary"><Plus size={18} /> Schedule Event</button>
                </form>
            </div>

            <div className="admin-card">
                <h3>Upcoming Events</h3>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {events.map(e => (
                                <motion.tr
                                    key={e.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <td>{e.title}</td>
                                    <td>{e.date}</td>
                                    <td>
                                        <button className="icon-btn delete" onClick={() => handleDeleteEvent(e.id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderMessages = () => (
        <div className="admin-panel fadeIn">
            <div className="panel-header">
                <h2>Contact Form Submissions</h2>
            </div>

            <div className="messages-list">
                {mockMessages.map(m => (
                    <div className="message-card" key={m.id}>
                        <div className="msg-header">
                            <div>
                                <h4>{m.name}</h4>
                                <a href={`mailto:${m.email}`} className="msg-email">{m.email}</a>
                            </div>
                            <span className="msg-date">{m.date}</span>
                        </div>
                        <p className="msg-body">"{m.message}"</p>
                        <button className="admin-btn secondary outline">Reply via Email</button>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <span>👑 Zion Admin</span>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'sermons' ? 'active' : ''}`}
                        onClick={() => setActiveTab('sermons')}
                    >
                        <Video size={20} /> Sermons
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
                        onClick={() => setActiveTab('events')}
                    >
                        <CalendarDays size={20} /> Events
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        <MessageSquare size={20} /> Contact Messages
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="nav-item logout" onClick={() => window.location.href = '/'}>
                        <LogOut size={20} /> Return to Site
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'sermons' && renderSermons()}
                {activeTab === 'events' && renderEvents()}
                {activeTab === 'messages' && renderMessages()}
            </main>
        </div>
    );
};

export default Admin;
