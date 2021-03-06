import React, { useState } from 'react'
import './AutoComplete.css'

interface IAutoCompleteProps {
    data: string[],
    id:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const AutoComplete = ({ data }: IAutoCompleteProps) => {
    const [enteredWord, setEnteredWord] = useState <string>('')
    const [filteredList, setFilteredList] = useState<string[]>([])
    const [listIndex, setListIndex] = useState <number>(0)
    const [submit, setSubmit] = useState(false)


    //Filter typed word in search box and store results in new Array
    const searchedWord = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputWord = e.target.value
        setEnteredWord(inputWord)
        if (inputWord.length >= 1) {
            setFilteredList(data.filter((item: string) => {
                return item.toLowerCase().includes(inputWord.toLowerCase())
            }))
        }
        else {
            setFilteredList([])
        }
    }

    //Handling Arrows and Enter button pressed 
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        // Upper Arrow Key
        if (e.key === "ArrowUp") {
            if (listIndex === 0) {
                setListIndex(filteredList.length - 1)
            }
            else if(listIndex > filteredList.length -1){
                setListIndex(0)
            }
            else setListIndex(listIndex - 1);
        }
        // Lower Arrow Key
        else if (e.key === "ArrowDown") {
            if (listIndex >= filteredList.length - 1) {
                setListIndex(0);
            }
            else setListIndex(listIndex + 1);
        }
        // Enter Keyx
        else if (e.key === 'Enter') {
            setEnteredWord(filteredList[listIndex]);
            setFilteredList([]);
            setListIndex(0);
        }
    };

    //Handling User Click on specific List Item
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setFilteredList([]);
        setEnteredWord((e.target as any).innerText);
    };

    // Handling Submit Button
    const submitValue = () => {
        if (enteredWord !== '') {
            setEnteredWord(enteredWord)
            setSubmit(true)
        }
    };

    console.log(listIndex, 'index')
    console.log(filteredList.length, 'array')

    return (
        <section>
            <div className='container'>
                {!submit ?
                    <div className="search-bar-container">
                        <div className='input-container'>
                            <input value={enteredWord} placeholder='Enter Word Here...' onChange={searchedWord} onKeyDown={handleKeyDown} />
                            <button onClick={submitValue}>Submit</button>
                        </div>
                        {filteredList.length !== 0 && <ul>
                            {
                                filteredList && filteredList.map((item: any, index) => {
                                    return (
                                        <li onClick={handleClick} className={index === listIndex ? "active" : ""} key={item}>{item}</li> //Since there is no Primary Id in Array so taking item himself as one and using in key Element
                                    )
                                })

                            }
                        </ul>
                        }

                    </div>
                    :
                    <h3>Submitted Value : {enteredWord}</h3>
                }
            </div>
        </section>
    )
}

export default AutoComplete