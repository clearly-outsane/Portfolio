import React from 'react'
import gsap from 'gsap'

export const imageSlideUp = (cb, duration) => {
    gsap.to('.project-image-container', {
        y: '-90vh',
        ease: 'expo.inOut',
        duration: duration,
        onComplete: () => {
            cb()
        },
    })
}

export const imageSlideFromDown = (cb, duration) => {
    gsap.fromTo(
        '.project-image-container',
        { y: '90vh' },
        {
            y: 0,
            ease: 'power3.out',
            duration: duration,
            onComplete: () => cb(),
        }
    )
}
