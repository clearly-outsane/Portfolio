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
            ease: 'expo.out',
            duration: duration,
            onComplete: () => cb(),
        }
    )
}

export const textSlideUp = (cb, duration) => {
    gsap.to(['.work-title', '.work-description'], {
        y: '-50vh',

        ease: 'expo.inOut',
        duration: duration,
        stagger: 0.2,
        onComplete: () => {
            cb()
        },
    })
}

export const textSlideFromDown = (cb, duration) => {
    gsap.fromTo(
        ['.work-title', '.work-description'],
        { y: '50vh' },
        {
            y: 0,
            stagger: 0.2,
            ease: 'expo.out',
            duration: duration,
            onComplete: () => cb(),
        }
    )
}
