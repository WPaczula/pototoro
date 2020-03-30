import React from 'react';
import info from './info.mp3';

const sound = new Audio(info);

interface NotificationSound {
	(): void;
}

const useNotificationSound = (): NotificationSound => {
	return React.useCallback(() => sound.play(), []);
};

export default useNotificationSound;
