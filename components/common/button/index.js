import React from 'react'
import { Button } from 'reactstrap'
import GithubIcon from '../../../img/icons/github.svg'
import GoogleIcon from '../../../img/icons/google.svg'

export const GithubButton = ({ href = '', color = 'default' }) => {
  return (
    <Button className="btn-neutral btn-icon" color={color} href={href}>
      <span className="btn-inner--icon">
        <img alt="Github" src={GithubIcon} />
      </span>
      <span className="btn-inner--text">Github</span>
    </Button>
  )
}

export const GoogleButton = ({ href = '', color = 'default' }) => {
  return (
    <Button className="btn-neutral btn-icon" color={color} href={href}>
      <span className="btn-inner--icon">
        <img alt="Google" src={GoogleIcon} />
      </span>
      <span className="btn-inner--text">Google</span>
    </Button>
  )
}