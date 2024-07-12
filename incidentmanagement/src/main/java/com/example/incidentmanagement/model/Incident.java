package com.example.incidentmanagement.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "incidents")
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "incident_id", nullable = false, unique = true)
    private String incidentId;

    @Column
    private String reporter;

    @Column(columnDefinition = "TEXT")
    private String details;

    @Column(name = "reported_date")
    private LocalDateTime reportedDate;

    @Column
    private String priority;

    @Column
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(String incidentId) {
		this.incidentId = incidentId;
	}

	public String getReporter() {
		return reporter;
	}

	public void setReporter(String reporter) {
		this.reporter = reporter;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public LocalDateTime getReportedDate() {
		return reportedDate;
	}

	public void setReportedDate(LocalDateTime reportedDate) {
		this.reportedDate = reportedDate;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Incident(Long id, String incidentId, String reporter, String details, LocalDateTime reportedDate,
			String priority, String status, User user) {
		super();
		this.id = id;
		this.incidentId = incidentId;
		this.reporter = reporter;
		this.details = details;
		this.reportedDate = reportedDate;
		this.priority = priority;
		this.status = status;
		this.user = user;
	}
    public Incident() {
    	
    }
    // Getters and Setters
}
