import React from 'react'

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  Table,
} from 'reactstrap'
import Layout from '../components/layout/Layout'
import { Header } from '../components'

const Index = () => (
  <Layout title="Dashboard">
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Page visits</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Page name</th>
                  <th scope="col">Visitors</th>
                  <th scope="col">Unique users</th>
                  <th scope="col">Bounce rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">/argon/</th>
                  <td>4,569</td>
                  <td>340</td>
                  <td>
                    <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/index.html</th>
                  <td>3,985</td>
                  <td>319</td>
                  <td>
                    <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/charts.html</th>
                  <td>3,513</td>
                  <td>294</td>
                  <td>
                    <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/tables.html</th>
                  <td>2,050</td>
                  <td>147</td>
                  <td>
                    <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/profile.html</th>
                  <td>1,795</td>
                  <td>190</td>
                  <td>
                    <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Index
