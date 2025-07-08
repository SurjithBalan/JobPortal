import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  FaEnvelope,
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaRedoAlt,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { PiKanbanLight } from "react-icons/pi";

export default function ManageRecruiter() {
  const [recruiters, setRecruiters] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return;

    if (editId) {
      setRecruiters((prev) =>
        prev.map((r) =>
          r.id === editId
            ? {
                ...r,
                name,
                password,
                email: `${name.toLowerCase().replace(/ /g, "_")}@example.com`,
              }
            : r
        )
      );
      setEditId(null);
    } else {
      const newRecruiter = {
        id: uuidv4(),
        name,
        email: `${name.toLowerCase().replace(/ /g, "_")}@example.com`,
        password,
        company: "New Company Inc.",
        role: "HR Recruiter",
        team: "Admin",
        addedOn: new Date().toLocaleDateString(),
        status: "Active",
        lastLogin: "3 hr ago",
      };
      setRecruiters([newRecruiter, ...recruiters]);
    }

    setName("");
    setPassword("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this recruiter?")) {
      setRecruiters(recruiters.filter((r) => r.id !== id));
    }
  };

  const handleEdit = (params) => {
    const { id, field, value } = params;
    setRecruiters((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleEditForm = (id) => {
    const toEdit = recruiters.find((r) => r.id === id);
    if (toEdit) {
      setEditId(id);
      setName(toEdit.name);
      setPassword(toEdit.password);
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Pending":
        return "warning";
      case "Deactivated":
        return "danger";
      default:
        return "secondary";
    }
  };

  const columns = [
    { field: "name", headerName: "HR Name", minWidth: 150, flex: 1 },
    { field: "email", headerName: "Email", minWidth: 200, flex: 1 },
    { field: "password", headerName: "Password", minWidth: 120, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      minWidth: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FaEdit className="text-primary" />}
          label="Edit"
          onClick={() => handleEditForm(params.id)}
        />,
        <GridActionsCellItem
          icon={<FaTrash className="text-danger" />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />,
      ],
    },
  ];

  return (
    <Container className="py-4">
      <h4 className="text-start my-3">
        <PiKanbanLight color="#1E88E5" size={30} /> Manage Recruiters
      </h4>

      {/* Add Recruiter Form */}
      <Row className="justify-content-center my-4">
        <Col xs={12} md={6}>
          <h6 className="fw-semibold mb-2 text-start ">Add Recruiters</h6>
          <div className="shadow rounded-3 p-4">
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3 text-start">
                  <Form.Label className="small">HR Name</Form.Label>
                  <Form.Control
                    className="shadow-none"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3 text-start">
                  <Form.Label className="small">Set Password</Form.Label>
                  <Form.Control
                    className="shadow-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="text-end">
                <Button onClick={handleSubmit} className="shadow-none">
                  {editId ? "Update" : "Submit"}
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Data Grid */}
      <div style={{ width: "100%", overflowX: "auto" }} className="mb-5">
        <div style={{ minWidth: "600px", height: 350 }}>
          <DataGrid
            rows={recruiters}
            columns={columns}
            pageSize={5}
            disableRowSelectionOnClick
            onCellEditCommit={handleEdit}
          />
        </div>
      </div>

      {/* Recruiter Cards */}
      <h5 className="mb-3 text-start">Recently Added Recruiters</h5>
      <Row>
        {recruiters.map((rec, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <div className="shadow rounded-4 h-100 p-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                    style={{ width: 50, height: 50, fontSize: "1.2rem" }}
                  >
                    {rec.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <strong>{rec.name}</strong>
                    <div
                      className="text-muted"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {rec.name.toLowerCase().replace(/ /g, ".")}
                    </div>
                  </div>
                  <Badge
                    bg={getStatusVariant(rec.status)}
                    className="ms-auto text-uppercase"
                  >
                    {rec.status}
                  </Badge>
                </div>

                <div className="mb-2 text-start small">
                  <FaEnvelope className="me-2 text-danger" />
                  {rec.email}
                </div>
                <div className="mb-2 text-start small">
                  <FaBuilding className="me-2 text-info" />
                  {rec.company}
                </div>
                <div className="mb-2 text-start small">
                  <FaUserTie className="me-2 text-success" />
                  {rec.role}
                </div>
                <div className="mb-3 text-start small">
                  <FaCalendarAlt className="me-2 text-secondary" />
                  Added on {rec.addedOn}
                </div>

                <div className="d-flex justify-content-center border-top pt-3">
                  <Button
                    variant="link"
                    size="sm"
                    className="shadow-none"
                    onClick={() => handleEditForm(rec.id)}
                  >
                    <FaEdit className="me-1" />
                    Edit
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-danger shadow-none"
                    onClick={() => handleDelete(rec.id)}
                  >
                    <FaTrash className="me-1" />
                    Delete
                  </Button>
                </div>
                <div className="mt-3">
                  <Button className="shadow-none" variant="link" size="sm">
                    <FaRedoAlt className="me-1" />
                    Reset Password
                  </Button>
                </div>
                <div
                  className="text-muted text-center mt-2"
                  style={{ fontSize: "12px" }}
                >
                  Last login: {rec.lastLogin}
                </div>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
