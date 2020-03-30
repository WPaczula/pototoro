import { renderHook, act } from '@testing-library/react-hooks';
import useCarousel from '..';

const mockPlay = jest.fn();
jest.mock('hooks/useNotificationSound', () => () => mockPlay);

describe('useCarousel', () => {
	it('should return first item by default.', () => {
		const items = [1, 2, 3];

		const { result } = renderHook(() => useCarousel<number>(items));

		expect(result.current.current).toBe(items[0]);
	});

	it('should increment item if the increment function is used.', () => {
		const items = [1, 2, 3];
		const { result } = renderHook(() => useCarousel<number>(items));

		act(() => {
			result.current.next();
		});

		expect(result.current.current).toBe(items[1]);
	});

	it('should go back to 0 after using all the items.', () => {
		const items = [1, 2, 3];
		const { result } = renderHook(() => useCarousel<number>(items));

		items.forEach(() => {
			act(() => {
				result.current.next();
			});
		});

		expect(result.current.current).toBe(items[0]);
	});
});
