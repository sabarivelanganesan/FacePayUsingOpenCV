'use client';
import Link from 'next/link';
import styles from "./page.module.css";
import Image from 'next/image';
import visacard from '../../../public/visa.svg';
import addcircle from '../../../public/add-circle.svg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import initialCards from '../../db'; // Renamed for clarity

export default function CardList() {
    const router = useRouter();
    const [cards, setCards] = useState(initialCards); // Use useState to manage cards

    const navigateToAddCardDetails = () => {
        router.push('new-card');
    }

    const handleDefault = (id) => {
        // Update cards to set isDefault correctly
        const updatedCards = cards.map(card => {
            return { ...card, isDefault: card.id === id }; // Set isDefault based on the clicked card's id
        });

        setCards(updatedCards); // Update state
    }

    return (
        <div className={styles.cardDetails}>
            <h2>Card List</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.cardtitle}>
                            <Image
                                src={visacard}
                                alt='visa'
                                height={40}
                            />
                            <div>
                                <p style={{ margin: '0' }}>{card.card_holder_name}</p>
                                <p style={{ marginTop: '5px', fontSize: '14px' }} className={styles.cardno}>
                                    <span>...</span>
                                    <span>...</span>
                                    <span>...</span>
                                    <span>{card.acc_end_no}</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardfooter}>
                            <div className={styles.cardExp}>
                                <p style={{ marginBottom: '10px' }}> Expiry Date</p>
                                <p style={{ marginTop: '10px', marginBottom: '0' }}>{card.expireDateMonth}/{card.expireDateYear}</p>
                            </div>
                            {card.isDefault ? (
                                <p>Default</p>
                            ) : (
                                <p onClick={() => handleDefault(card.id)} style={{ cursor: 'pointer', color: 'green' }}>Set as default</p>
                            )}
                        </div>
                    </div>
                ))}
                <div onClick={navigateToAddCardDetails} className={styles.addCardDetails}>
                    <Image
                        src={addcircle}
                        alt='visa'
                        width={90}
                        height={90}
                    />
                    <h4 style={{ marginLeft: '30px' }}>Add Card Details</h4>
                </div>
            </div>
        </div>
    );
}
