// adminNotificationService.js
const UserRequest = require('../models/UserRequest');

class AdminNotificationService {
    static async notifyChangeRequest(changeRequest) {
        try {
            // Implement notification logic (e.g., send email, create notification in admin dashboard)
            console.log(`Notifying admins about change request: ${changeRequest}`);
            // Simulated asynchronous operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Admins notified successfully');
        } catch (error) {
            console.error('Error notifying change request:', error);
            throw new Error('Failed to notify change request');
        }
    }

    static async notifyNewWordRequest(newWordRequest) {
        try {
            // Implement notification logic for new word request
            console.log(`Notifying admins about new word request: ${newWordRequest}`);
            // Simulated asynchronous operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Admins notified about new word request successfully');
        } catch (error) {
            console.error('Error notifying new word request:', error);
            throw new Error('Failed to notify new word request');
        }
    }
}

module.exports = AdminNotificationService;