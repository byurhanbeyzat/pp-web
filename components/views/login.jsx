import React, { useState } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import Link from 'next/link'
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'
import redirect from '../../lib/redirect'
import AuthLayout from '../layout/AuthLayout'
import { GithubButton, GoogleButton } from '../common'
import Error from '../ErrorMessage'

import { GET_USER, SIGNIN_MUTATION } from '../../graphql'

const Login = ({ client }) => {
  const [state, setState] = useState({ email: '', password: '' })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      refetchQueries={[{ query: GET_USER }]}
      onCompleted={data => {
        // Force a reload of all the current queries now that the user is
        // logged in
        client.cache.reset().then(() => {
          redirect({}, '/')
        })
        console.log(data)
      }}
      onError={error => {
        // If you want to send error to external service?
        console.log(error)
      }}
    >
      {(login, { loading, error }) => (
        <AuthLayout title="Login">
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="text-center">
                  <GithubButton />
                  <GoogleButton />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <Form
                  role="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    e.stopPropagation()
                    await login({
                      variables: { ...state },
                    })
                    setState({ email: '', password: '' })
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <Error error={error} />
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="email"
                          name="email"
                          value={state.email}
                          placeholder="Email"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="password"
                          name="password"
                          value={state.password}
                          placeholder="Password"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button
                        className="my-3 px-5"
                        color="primary"
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </div>
                  </fieldset>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3 mb-5">
              <Col xs="6" />
              <Col className="text-right" xs="6">
                <Link href="/register">
                  <a className="text-primary">
                    <small>Create new account</small>
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </AuthLayout>
      )}
    </Mutation>
  )
}

export default withApollo(Login)
