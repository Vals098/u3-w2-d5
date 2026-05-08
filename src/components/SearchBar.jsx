import { Form, Button } from "react-bootstrap"

const SearchBar = function () {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search city..."
        className="me-2"
      />

      <Button variant="primary">Search</Button>
    </Form>
  )
}

export default SearchBar
