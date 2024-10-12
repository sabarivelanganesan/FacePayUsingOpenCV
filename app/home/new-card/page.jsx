'use client'
import { useState } from 'react';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import cards from '../../db';


export default function NewCard() {

    const router = useRouter();

    const [cardNumber, setCardNumber] = useState('');
    const [reEntercardNumber, setReEnterCardNumber] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardName, setCardName] = useState('');
    const [expireDateMonth, setExpireDateMonth] = useState('');
    const [expireDateYear, setExpireDateYear] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    // const [isDefault, setIsDefault] = useState(false);

    const handleCardTypeChange = (e) => {
        setCardType(e.target.value);
    };

    const handleCancel = () => {
        router.push('/home/card-details');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const cardData = {
            number: cardNumber,
            card_type: cardType,
            card_holder_name: cardName,
            expireDateMonth,
            expireDateYear,
            isDefault: false
            // isDefault,
        };
        const sendDateJson = {
            ...cardData,
            id: cards.length+1,
            acc_end_no: cardNumber.slice(12, 16)
        }
        console.log(sendDateJson);
        cards.push(sendDateJson);
        console.log(sendDateJson);
        // Reset form
        setCardNumber('');
        setReEnterCardNumber('');
        setCardType('');
        setCardName('');
        setExpireDateMonth('');
        setExpireDateYear('');
        // setIsDefault(false);
        router.push('/home/card-details')
    };


    return (
        <div style={{marginTop: '120px', paddingLeft: '80px'}}>
            <h4 style={{fontSize: '32px'}}>Add Card Details</h4>
            <form className={styles.cardForm} onSubmit={handleSubmit} style={{ marginTop: '40px' }}> 
                <div className={styles.formGroup}>
                    <div className={styles.formField}>
                        <div className={styles.inputLabel} >Card Number</div>
                        <input
                        autoComplete="off"
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardNumber}
                        name='cardnumber'
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        className={styles.inputField}
                        />
                    </div>
                    <div className={styles.formField}>
                        <div className={styles.inputLabel} >Re-Enter Card Number</div>
                        <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={reEntercardNumber}
                        name='cardnumber'
                        onChange={(e) => setReEnterCardNumber(e.target.value)}
                        required
                        className={styles.inputField}
                        />
                    </div>
                </div>
                <div className={styles.formField}>
                    <div style={{marginBottom: '10px'}}>Card Type:</div>
                    <label style={{marginRight: '10px'}}>
                        <input
                            type="radio"
                            name="cardType"
                            value="Visa"
                            checked={cardType === 'Visa'}
                            onChange={handleCardTypeChange}
                        />
                        Visa
                        </label>

                        <label style={{marginRight: '10px'}}>
                            <input
                                type="radio"
                                name="cardType"
                                value="MasterCard"
                                checked={cardType === 'MasterCard'}
                                onChange={handleCardTypeChange}
                            />
                            MasterCard
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="cardType"
                                value="Amex"
                                checked={cardType === 'Amex'}
                                onChange={handleCardTypeChange}
                            />
                            American Express
                    </label>
                </div>

                <div className={styles.formField}>
                    <div className={styles.inputLabel}>Card Name:</div>
                    <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Card Name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    />
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.formField}>
                        <div style={{marginBottom: '10px'}}>Expire Date <span>(Month & Year)</span></div>
                        <div style={{display: 'flex'}}>
                            <input
                                style={{paddingLeft: '20px'}}
                                className={styles.expField}
                                type="number"
                                value={expireDateMonth}
                                placeholder='09'
                                onChange={(e) => setExpireDateMonth(e.target.value)}
                                required
                            />
                            <div className={styles.expBar}></div>               
                            <input
                            style={{marginLeft: '25px', paddingLeft: '20px'}}
                                className={styles.expField}
                                type="number"
                                value={expireDateYear}
                                placeholder='2026'
                                onChange={(e) => setExpireDateYear(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formField}>
                        <div className={styles.inputLabel}>CVV / CVC</div>
                        <input
                        className={styles.inputField}
                        type="number"
                        placeholder="CVV/CVC"
                        value={cvvNumber}
                        onChange={(e) => setCvvNumber(e.target.value)}
                        required
                        />
                    </div>
                </div>

                <div>
                    <button style={{marginRight: '15px'}} type="submit" className={styles.formButton}>
                        Add Card
                    </button>
                    <button onClick={handleCancel} type="submit" className={styles.cancelButton}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}