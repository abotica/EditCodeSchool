import React, { useContext, useEffect } from 'react'
import useCreateOptions from '../hooks/useCreateOptions'

import UrlContext from '../contexts/UrlContext'

import axios from 'axios'

import LoadingSpinner from './ui/LoadingSpinner'
import Button from './ui/Button'
import Input from './ui/Input'
import Select from 'react-select'


function WorkshopsModalForm({ isLoading, lecturers, workshop, setWorkshop, setIsSubmitting, handlePost, editData, editDataId, handlePut }) {

    const { workshopsURL } = useContext(UrlContext)

    // options for select inputs
    const lecturerOptions = useCreateOptions(lecturers)
    const topicsOptions = [
        { value: "react", label: "React" },
        { value: "express", label: "Express" },
        { value: "php", label: "PHP" },
        { value: "wordpress", label: "Wordpress" },
    ]
    const difficultyOptions = [
        { value: "junior", label: "Junior" },
        { value: "mid", label: "Mid" },
        { value: "senior", label: "Senior" }
    ]

    // functions for handling events
    function handleOnChange(e) {
        setWorkshop({
            ...workshop,
            [e.target.name]: e.target.value
        })
    }
    function handleOnChangeSelectTopic(selectedOption) {
        console.log(selectedOption)
        setWorkshop({
            ...workshop,
            topic: {
                id: selectedOption.value,
                name: selectedOption.label
            }
        })
    }
    function handleOnChangeSelectLecturers(selectedOptions) {
        console.log(selectedOptions)
        setWorkshop({
            ...workshop,
            lecturers: selectedOptions.map(lecturer => {
                return {
                    id: lecturer.value,
                    name: lecturer.label
                }
            })
        })
        console.log(workshop)
    }
    function handleOnChangeSelectDifficulty(selectedOption) {
        setWorkshop({
            ...workshop,
            difficulty: {
                id: selectedOption.value,
                name: selectedOption.label
            }
        })
    }

    // useEffect for fetching data for editing
    useEffect(() => {
        if (editData) {
            axios.get(workshopsURL + `/${editDataId}`)
                .then(response => {
                    setWorkshop(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [])

    return isLoading ? <LoadingSpinner /> :
        <form className='flex flex-col h-max w-full' onSubmit={e => {
            e.preventDefault(); setIsSubmitting(true)
            if (editData) handlePut()
            else handlePost()
        }}>
            {editData ? <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Uredi podatke o radionici</h2> : <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Dodaj radionicu</h2>}
            <Input type='text' name='name' value={workshop.name} handleOnChange={handleOnChange} placeholder='Naziv radionice' />
            <Input type='date' name='date' value={workshop.date} handleOnChange={handleOnChange} placeholder='Datum održavanja' />
            <Select className='my-4' defaultValue={difficultyOptions.filter(diff => diff.value === workshop.difficulty.id)} value={workshop.difficulty.value} onChange={selectedOption => handleOnChangeSelectDifficulty(selectedOption)} options={difficultyOptions} placeholder='Težina radionice' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required />
            <Select className='my-4' defaultValue={topicsOptions.filter(topic => topic.value === workshop.topic.id)} value={workshop.topic.value} onChange={selectedOption => handleOnChangeSelectTopic(selectedOption)} options={topicsOptions} placeholder='Tema radionice' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required />
            <Select className='my-4' defaultValue={lecturerOptions.filter(lect => workshop.lecturers.find(obj => obj.id === lect.value))} value={workshop.lecturers.name} onChange={selectedOptions => handleOnChangeSelectLecturers(selectedOptions)} isMulti options={lecturerOptions} placeholder='Predavači radionice' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required />
            <Input type='textarea' name='description' value={workshop.description} handleOnChange={handleOnChange} placeholder='Opis radionice' />
            {editData ? <Button>Izmijeni podatke</Button> : <Button>Dodaj</Button>}
        </form>

}

export default WorkshopsModalForm