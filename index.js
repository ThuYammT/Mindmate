const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const meditations = [
  {
    id: 1,
    title: "Mindfulness Meditation",
    instructions: `
1. Find Your Seat (2 minutes)
   Sit comfortably on a stable surface—a chair, a cushion, or a park bench. Make sure you are seated securely, not perching or leaning back.
   If you are sitting on a cushion on the floor, cross your legs comfortably in front of you.
   If you’re sitting on a chair, ensure your feet are flat on the floor.

2. Straighten Your Spine (2 minutes)
   Gently straighten your upper body without forcing it. Your spine has a natural curve, so let it maintain that natural shape. Your head and shoulders should rest comfortably on top of your spine, without strain.

3. Position Your Arms and Hands (2 minutes)
   Let your upper arms fall naturally by your sides, parallel to your body.
   Rest your hands gently on the tops of your legs, with your palms facing down. This should feel relaxed—too far forward will cause you to hunch, and too far back will create tension.

4. Relax Your Gaze (2 minutes)
   Gently drop your chin slightly and let your gaze fall downward.
   You can choose to lower your eyelids or keep them half-open, but it’s not necessary to close your eyes during meditation.
   Simply let whatever appears before your eyes stay in your awareness without focusing too much on it.

5. Settle into Your Body (2 minutes)
   Take a few moments to relax. Allow your body to settle naturally into the position you’ve chosen.
   Bring your attention to how your body feels right now—any sensations, areas of tension, or areas of relaxation.

6. Focus on Your Breath (5 minutes)
   Begin to notice your breath. Feel the air moving in and out of your body.
   You can focus on the sensation of the breath at your nostrils, the rising and falling of your belly, or the expansion and contraction of your chest.
   With each breath, mentally note: "breathing in" as you inhale and "breathing out" as you exhale.

7. Notice Your Mind Wandering (5 minutes)
   As you focus on your breath, your mind will inevitably wander. When you notice this, gently bring your attention back to your breath.
   There’s no need to block your thoughts or get frustrated. Simply observe them, acknowledge them, and return your focus to your breath.
   The goal is not to eliminate thoughts, but to gently bring your attention back when you realize it has drifted.

8. Practice Pausing (2 minutes)
   Before you make any physical adjustments (like moving your body or scratching an itch), take a pause.
   Let yourself be aware of the sensation of needing to adjust. Notice the urge to move, but wait for a moment before acting.
   By pausing, you create a space between what you’re experiencing and your actions.

9. Return Without Judgment (2 minutes)
   If your mind continues to wander, that’s perfectly normal.
   Instead of engaging or reacting to your thoughts, practice simply observing them.
   Each time your mind drifts, just gently return your focus to your breath without judgment or expectation. This is the practice of mindfulness.

10. End the Session Gently (2 minutes)
    When you're ready to end the meditation, gently lift your gaze (if your eyes were closed, open them slowly).
    Take a moment to notice the sounds around you, how your body feels, and the thoughts or emotions that may be present.
    Decide how you'd like to continue your day, transitioning from this moment of mindfulness into your next activity.
    `,
    image: "http://localhost:3000/images/mindfulness_meditation.png",
    audio: "http://localhost:3000/audio/mindfulness_meditation.mp3"
  },
  {
    id: 2,
    title: "Zen Meditation (Zazen)",
    instructions: `
1. Prepare Your Space (2 minutes)
   Find a quiet, clean space where you won’t be disturbed.
   Place a meditation cushion (zafu) or folded blanket on the floor. If using a chair, choose one with a straight back.
   Light a candle or incense if it helps create a calming atmosphere (optional).

2. Find Your Seat (2 minutes)
   Sit on the cushion with your legs crossed in a comfortable position (full lotus, half lotus, or Burmese style). If using a chair, keep your feet flat on the floor, hip-width apart.
   Adjust your posture so your hips are slightly higher than your knees. This helps maintain a straight spine.

3. Align Your Spine (2 minutes)
   Gently rock side to side and forward and backward to find your center of balance.
   Straighten your spine naturally, elongating it without stiffness. Imagine a string pulling the crown of your head toward the ceiling.
   Tuck your chin slightly to straighten the back of your neck.

4. Position Your Hands (2 minutes)
   Form the cosmic mudra: place your dominant hand palm-up on your lap, and rest your other hand palm-up on top of it.
   Gently touch the tips of your thumbs together to form a soft oval. Rest your hands against your lower abdomen.

5. Relax Your Gaze (2 minutes)
   Keep your eyes half-open, gazing softly at a point about 2-3 feet in front of you on the floor.
   Avoid focusing on anything specific—let your gaze be soft and unfocused.

6. Focus on Your Breath (5 minutes)
   Breathe naturally through your nose. Pay attention to the sensation of your breath as it enters and leaves your body.
   If helpful, count your breaths: inhale (1), exhale (2), up to 10, then start again.

7. Observe Your Thoughts (5 minutes)
   When thoughts arise, acknowledge them without judgment or engagement. Imagine them as clouds passing through the sky.
   Gently return your focus to your breath or counting.

8. End the Session (2 minutes)
   When the session is complete, bow gently to honor your practice.
   Slowly rise and transition mindfully into your next activity.
    `,
    image: "http://localhost:3000/images/Zen_Meditation.png",
    audio: "http://localhost:3000/audio/Zen_Meditation.mp3"
  },
  {
    id: 3,
    title: "Mantra Meditation",
    instructions: `
1. Prepare Your Space (2 minutes)
   Choose a quiet, comfortable space where you won’t be disturbed.
   Sit on a cushion or chair with your spine straight and hands resting on your knees or lap.

2. Choose Your Mantra (2 minutes)
   Select a mantra that resonates with you (e.g., "Om," "So Hum," "Peace," or "I am").
   If you’re new to mantra meditation, start with a simple, universal mantra like "Om."

3. Close Your Eyes (2 minutes)
   Gently close your eyes to minimize distractions and turn your attention inward.

4. Begin Repeating the Mantra (5 minutes)
   Start repeating your mantra silently in your mind. Sync it with your breath if possible (e.g., "So" on the inhale, "Hum" on the exhale).
   Let the repetition become effortless and natural.

5. Deepen Your Focus (5 minutes)
   If your mind wanders, gently bring your attention back to the mantra.
   Allow the mantra to become softer and quieter, almost like a whisper in your mind.

6. Let the Mantra Fade (2 minutes)
   After some time, allow the mantra to fade into the background. Rest in the stillness and silence that remains.

7. End the Session (2 minutes)
   Slowly bring your awareness back to your body and surroundings.
   Open your eyes and take a moment to transition mindfully.
    `,
    image: "http://localhost:3000/images/Mantra_Meditation.png",
    audio: "http://localhost:3000/audio/Mantra_Meditation.mp3"
  },
  {
    id: 4,
    title: "Yoga Meditation (Yoga Nidra)",
    instructions: `
1. Lie Down in Savasana (2 minutes)
   Lie flat on your back with your arms at your sides, palms facing up.
   Close your eyes and relax your entire body.

2. Set an Intention (2 minutes)
   Silently set a personal intention or sankalpa (e.g., "I am at peace" or "I am focused").

3. Body Scan (5 minutes)
   Bring your attention to each part of your body, starting from your toes and moving upward.
   Mentally relax each area as you focus on it.

4. Breath Awareness (5 minutes)
   Observe your natural breath without trying to control it.
   Notice the rise and fall of your chest and abdomen.

5. Visualize (3 minutes)
   Imagine a peaceful scene, such as a beach or forest.
   Engage all your senses in the visualization—feel the warmth, hear the sounds, and smell the scents.

6. Return to Your Intention (2 minutes)
   Repeat your sankalpa silently, feeling it resonate deeply within you.

7. End the Session (1 minute)
   Gently wiggle your fingers and toes.
   Slowly open your eyes and transition back to awareness.
    `,
    image: "http://localhost:3000/images/Yoga_Meditation.png",
    audio: "http://localhost:3000/audio/Yoga_Meditation.mp3"
  },
  {
    id: 5,
    title: "Transcendental Meditation",
    instructions: `
1. Sit Comfortably (2 minutes)
   Sit in a comfortable position with your spine straight.
   Close your eyes and take a few deep breaths.

2. Use Your Mantra (5 minutes)
   Silently repeat your personalized mantra (given by a TM teacher) in your mind.
   Let it flow naturally without effort.

3. Allow Thoughts to Pass (5 minutes)
   If thoughts arise, gently return to your mantra.
   There’s no need to force focus—let the mantra guide you into deeper awareness.

4. Experience Transcendence (5 minutes)
   As your mind settles, you may experience a state of pure awareness or transcendence.
   Rest in this stillness.

5. End the Session (3 minutes)
   Slowly stop repeating the mantra.
   Sit quietly for a few moments, then open your eyes and transition mindfully.
    `,
    image: "http://localhost:3000/images/Transcendental_Meditation.png",
    audio: "http://localhost:3000/audio/Transcendental_Meditation.mp3"
  },
  {
    id: 6,
    title: "Chakra Meditation",
    instructions: `
1. Sit Comfortably (2 minutes)
   Sit in a comfortable position with your spine straight.
   Close your eyes and take a few deep breaths.

2. Focus on the Root Chakra (3 minutes)
   Visualize a red glowing light at the base of your spine.
   Imagine it spinning and growing brighter with each breath.

3. Move Upward Through the Chakras (10 minutes)
   Gradually focus on each chakra, moving upward:
   - Sacral Chakra (orange, just below the navel)
   - Solar Plexus Chakra (yellow, at the stomach)
   - Heart Chakra (green, at the center of the chest)
   - Throat Chakra (blue, at the throat)
   - Third Eye Chakra (indigo, between the eyebrows)
   - Crown Chakra (violet or white, at the top of the head)
   Spend about 1-2 minutes on each chakra, visualizing its color and feeling its energy.

4. Balance All Chakras (3 minutes)
   Visualize all seven chakras glowing brightly and spinning in harmony.
   Feel a sense of balance and alignment throughout your body.

5. End the Session (2 minutes)
   Take a few deep breaths, then slowly open your eyes.
   Carry this sense of balance with you as you transition into your day.
    `,
    image: "http://localhost:3000/images/Chakra_Meditation.png",
    audio: "http://localhost:3000/audio/Chakra_Meditation.mp3"
  }

];

app.get('/api/meditations', (req, res) => {
  res.json(meditations);
});

app.get('/api/meditations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const meditation = meditations.find(m => m.id === id);
  if (meditation) {
    res.json(meditation);
  } else {
    res.status(404).json({ message: 'Meditation not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});