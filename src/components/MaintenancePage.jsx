import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Mail, RefreshCcw } from 'lucide-react';
import './MaintenancePage.css';

const MaintenancePage = () => {
    return (
        <div className="maintenance-container">
            {/* Animated background glow */}
            <motion.div
                className="background-glow"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="maintenance-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="icon-wrapper">
                    <motion.div
                        className="icon-bg"
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Hammer size={48} strokeWidth={1.5} />
                    </motion.div>
                </div>

                <motion.div className="status-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="status-dot" />
                    Scheduled Maintenance
                </motion.div>

                <motion.h1
                    className="title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Refining Perfection
                </motion.h1>

                <motion.p
                    className="description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    We're currently fine-tuning our systems to provide you with a more seamless experience.
                    Everything will be back to normal shortly.
                </motion.p>

                <div className="social-links">
                    <motion.button
                        className="social-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RefreshCcw size={18} />
                        Check Status
                    </motion.button>

                    {/* <motion.button 
            className="social-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Contact Support
          </motion.button> */}
                </div>
            </motion.div>
        </div>
    );
};

export default MaintenancePage;
