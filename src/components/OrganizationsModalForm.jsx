import React, { useContext, useEffect } from 'react'

import Input from './ui/Input'
import Select from 'react-select'
import useCreateOptions from '../hooks/useCreateOptions'
import LoadingSpinner from './ui/LoadingSpinner'
import Button from './ui/Button'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

function OrganizationsModalForm({ isLoading, workshops, organization, setOrganization, setIsSubmitting, handlePost, editData, editDataId, handlePut }) {

    const { organizationsURL } = useContext(UrlContext)

    const workshopOptions = useCreateOptions(workshops)

    // functions for handling events
    function handleOnChange(e) {
        setOrganization({
            ...organization,
            [e.target.name]: e.target.value
        })
    }
    function handleOnChangeSelectWorkshops(selectedOptions) {
        setOrganization({
            ...organization,
            workshops: selectedOptions.map(workshop => {
                return {
                    id: workshop.value,
                    name: workshop.label
                }
            })
        })
    }

    // useEffect for fetching data for editing
    useEffect(() => {
        if (editData) {
            axios.get(organizationsURL + `/${editDataId}`)
                .then(response => {
                    setOrganization(response.data)
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
            {editData ? <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Uredi podatke o organizaciji</h2> : <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Dodaj organizaciju</h2>}
            <Input value={organization.name} handleOnChange={handleOnChange} type='text' name='name' placeholder='Naziv organizacije' />
            {/* <Select className='my-4' defaultValue={workshopOptions.filter(workshop => organization.workshops.find(obj => obj.id === workshop.value))} value={organization.workshops.name} onChange={selectedOptions => handleOnChangeSelectWorkshops(selectedOptions)} isMulti options={workshopOptions} placeholder='Radionice koje organiziraju' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required/> */}
            <Input value={organization.description} handleOnChange={handleOnChange} type='textarea' name='description' placeholder='Opis organizacije' />
            {editData ? <Button>Izmijeni podatke</Button> : <Button>Dodaj</Button>}
        </form>

}

export default OrganizationsModalForm