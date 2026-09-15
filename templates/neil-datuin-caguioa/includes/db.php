<?php
declare(strict_types=1);

class MockDisabilitiesResult {
    private array $data;
    public function __construct(array $data) { $this->data = $data; }
    public function fetch_assoc(): ?array { return $this->data ? array_shift($this->data) : null; }
}

class MockDisabilitiesStmt {
    private string $slug = '';
    public function bind_param(string $types, string &$slug): bool { $this->slug = $slug; return true; }
    public function execute(): bool { return true; }
    public function get_result(): MockDisabilitiesResult {
        $catalog = [
            'visual' => ['name' => 'Visual Disability', 'support_data' => 'Braille materials, screen reader assistance, orientation mobility training.'],
            'hearing' => ['name' => 'Hearing Disability', 'support_data' => 'Sign language interpreters, visual alarm indicators, closed captioning.'],
            'mobility' => ['name' => 'Mobility / Orthopedic Disability', 'support_data' => 'Ramps, accessible restrooms, wheelchair assistance, wide corridors.'],
            'psychosocial' => ['name' => 'Psychosocial Disability', 'support_data' => 'Mental health support, quiet spaces, flexible accommodations.'],
            'intellectual' => ['name' => 'Intellectual Disability', 'support_data' => 'Simplified text, visual guides, specialized coaching.'],
            'learning' => ['name' => 'Learning Disability (Dyslexia/ADHD)', 'support_data' => 'Dyslexia-friendly fonts, extended time, multi-sensory materials.'],
            'speech' => ['name' => 'Speech and Language Impairment', 'support_data' => 'Communication boards, text-to-speech tools, assistive apps.'],
            'autism' => ['name' => 'Autism Spectrum Disorder', 'support_data' => 'Sensory-friendly rooms, structured routines, clear visual cues.'],
            'multiple' => ['name' => 'Multiple Disabilities', 'support_data' => 'Comprehensive personalized care plans, holistic assistive equipment.'],
            'chronic' => ['name' => 'Chronic Illness with Disability', 'support_data' => 'Medical accommodation, flexible scheduling, health monitoring.']
        ];
        $found = isset($catalog[$this->slug]) ? [$catalog[$this->slug]] : [];
        return new MockDisabilitiesResult($found);
    }
    public function close(): bool { return true; }
}

class MockConnection {
    public function prepare(string $query): MockDisabilitiesStmt { return new MockDisabilitiesStmt(); }
}

$conn = new MockConnection();
