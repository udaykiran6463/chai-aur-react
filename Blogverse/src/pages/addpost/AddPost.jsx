import React from 'react'
import { Container, Postform as PostForm } from '../../components/index.components'

function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost