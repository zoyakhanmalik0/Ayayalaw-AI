/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Optional name of the person submitting (can be 'Anonymous')
      - `email` (text) - Email address for reply (required)
      - `message` (text) - The message content (required)
      - `submitted_at` (timestamptz) - Timestamp when the form was submitted
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone to insert contact submissions (public form)
    - Only authenticated admins can read submissions (not implemented yet, table is locked down)

  3. Notes
    - This table stores contact form submissions
    - Email addresses are only used to respond to inquiries
    - No tracking or third-party sharing
    - Data is stored securely with RLS enabled
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text DEFAULT 'Anonymous',
  email text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);