import { renderHook } from '@testing-library/react-hooks';
import useNotificationSound from '..';

describe('useNotificationSound', () => {
	it('should return the same play function on rerender.', () => {
		const { result, rerender } = renderHook(() => useNotificationSound());
		const playFunction = result.current;

		rerender();

		expect(result.current).toBe(playFunction);
	});
});
