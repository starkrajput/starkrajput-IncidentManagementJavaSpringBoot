package com.example.incidentmanagement.controller;

import com.example.incidentmanagement.model.Incident;
import com.example.incidentmanagement.model.User;
import com.example.incidentmanagement.service.IncidentService;
import com.example.incidentmanagement.service.UserService;
import com.example.incidentmanagement.util.Utility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController {

    @Autowired
    private IncidentService incidentService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createIncident(@RequestBody Incident incident, @RequestParam String username) {
        Optional<User> user = userService.findByUsername(username);

        if (user.isPresent()) {
            incident.setUser(user.get());
            incident.setIncidentId(Utility.generateIncidentId());
            incident.setReportedDate(LocalDateTime.now());
            Incident savedIncident = incidentService.saveIncident(incident);
            return ResponseEntity.ok(savedIncident);
        }

        return ResponseEntity.badRequest().body("User not found");
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Incident>> getIncidentsByUserId(@PathVariable Long userId) {
        List<Incident> incidents = incidentService.findByUserId(userId);
        return ResponseEntity.ok(incidents);
    }

    @GetMapping("/{incidentId}")
    public ResponseEntity<?> getIncidentById(@PathVariable String incidentId) {
        Optional<Incident> incident = incidentService.findByIncidentId(incidentId);
        return incident.isPresent() ? ResponseEntity.ok(incident.get()) : ResponseEntity.badRequest().body("Incident not found");
    }

    @PutMapping("/update/{incidentId}")
    public ResponseEntity<?> updateIncident(@PathVariable String incidentId, @RequestBody Incident incident) {
        Optional<Incident> existingIncident = incidentService.findByIncidentId(incidentId);

        if (existingIncident.isPresent()) {
            Incident inc = existingIncident.get();

            if ("Closed".equals(inc.getStatus())) {
                return ResponseEntity.badRequest().body("Closed incidents cannot be edited");
            }

            inc.setDetails(incident.getDetails());
            inc.setPriority(incident.getPriority());
            inc.setStatus(incident.getStatus());
            Incident updatedIncident = incidentService.saveIncident(inc);
            return ResponseEntity.ok(updatedIncident);
        }

        return ResponseEntity.badRequest().body("Incident not found");
    }
}
