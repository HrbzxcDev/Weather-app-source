import { useState, useEffect } from 'react';
import { SEARCH_DEFAULT } from '../api/ipa';

export const useImageFetch = () => {
    const [image, setImage] = useState('');
    const fetchImage = async endpoint => {
        try {
            const result = await (await fetch(endpoint)).json();
            setImage(result.results[Math.floor(Math.random() * 10)].urls.regular);
            //console.log(result.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchImage(`${SEARCH_DEFAULT}`);
    }, []);

    return [image, fetchImage];

}