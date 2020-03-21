import * as React from 'react';

interface ICarouselIterator<T> {
	current: T;
	increment(): void;
}

function useCarousel<T>(items: Array<T>): ICarouselIterator<T> {
	const [index, setIndex] = React.useState<number>(0);

	const increment = React.useCallback(() => {
		let newIndex = 0;

		if (index + 1 > items.length - 1) {
			setIndex(newIndex);
		} else {
			newIndex = index + 1;
			setIndex(newIndex);
		}
	}, [index, setIndex, items]);

	return {
		current: items[index],
		increment
	};
}

export default useCarousel;
