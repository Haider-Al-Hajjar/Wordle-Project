const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
}
function Wordbank() {
    const words = [
        "Abide", "Banal", "Canny", "Decry", "Ebull", "Fable", "Gabby", "Habit", "Icily", "Jaded",
        "Karma", "Latch", "Mirth", "Nadir", "Oasis", "Piety", "Quell", "Rigor", "Sable", "Tardy",
        "Usurp", "Vivid", "Witty", "Xenon", "Yield", "Zesty", "Acute", "Bluff", "Craft", "Droll",
        "Eager", "Gloat", "Havoc", "Ideal", "Juicy", "Knave", "Leery", "Maxim", "Noisy",
        "Oaken", "Pouch", "Query", "Recur", "Shrew", "Taper", "Utter", "Vigor", "Woven", "Xeric",
        "Yearn", "Zonal", "Afoot", "Brisk", "Charm", "Douse", "Eclat", "Fling", "Glint", "Hasty",
        "Ivory", "Jumpy", "Knoll", "Lithe", "Miser", "Nifty", "Opine", "Prone", "Quirk", "Rebut",
        "Snide", "Trove", "Unfit", "Vague", "Whirl", "Young", "Zippy", "Agile", "Brawn", "Crisp",
        "Dandy", "Ebony", "Frost", "Gloom", "Hefty", "Jolly", "Kneel", "Lofty", "Mocha", "Niche",
        "Overt", "Pluck", "Quiet", "Roost", "Slyly", "Trace", "Uncut", "Valor", "Wryly", "Xylem",
        "Yelps", "Align", "Binge", "Crave", "Ditch", "Elate", "Frown", "Glare"
    ]
    const definitions = [
        "To tolerate or endure", "So lacking in originality as to be obvious and boring", "Having or showing shrewdness and good judgment",
        "To publicly denounce", "Full of energy and enthusiasm", "A short story typically with animals as characters", "Excessively talkative",
        "A settled or regular tendency or practice", "In an icy manner", "Tired or bored", "The sum of a person's actions in this and previous states of existence",
        "A device for holding a door or gate closed", "Great merriment", "The lowest point in the fortunes of a person or organization", "A fertile spot in a desert where water is found",
        "The quality of being religious or reverent", "To put an end to", "The quality of being extremely thorough and careful", "A shade of black", "Delayed beyond the expected time",
        "To take a position of power illegally or by force", "Producing powerful feelings or strong, clear images in the mind", "Showing or characterized by quick and inventive verbal humor",
        "A chemical element with symbol Xe", "To produce or provide", "Having a strong, pleasant, and somewhat spicy flavor", "Sharp or severe in effect", "To deceive or trick",
        "An activity involving skill in making things by hand", "Curious or unusual in a way that provokes dry amusement", "Strongly wanting to do or have something",
        "To dwell on one's own success or another's misfortune with smugness", "Widespread destruction", "Satisfying one's conception of what is perfect", "Deliciously sweet", "A dishonest or unscrupulous man",
        "Cautious or wary due to realistic suspicions", "A concise statement of a general truth", "Making a lot of noise", "Made of or resembling oak wood", "A small bag or pouch",
        "A question", "To occur again periodically or repeatedly", "A woman of violent temper and speech", "To diminish or reduce in thickness towards one end", "Complete",
        "Physical strength and good health", "Made by weaving", "Adapted to a dry habitat", "To have an intense feeling of longing for something", "Related to or resembling a zone",
        "On foot", "Marked by rapidity and efficiency", "The power or quality of giving delight", "To pour a liquid over", "Brilliant display or effect", "To throw or hurl forcefully",
        "To shine with a steady but subdued light", "Done or acting with excessive speed or urgency", "A hard, creamy-white substance composing the tusks of elephants", "Nervous and unable to relax",
        "A small hill or mound", "Gracefully thin", "A person who hoards wealth and spends as little money as possible", "Particularly good, skillful, or effective", "To hold or express an opinion",
        "Likely to or liable to suffer from, do, or experience something", "A peculiar aspect of a person's character or behavior", "To claim or prove that evidence or an accusation is false",
        "Disdainfully or ironically humorous", "A collection of valuable items", "Not in good physical or mental condition", "Of uncertain, indefinite, or unclear character or meaning",
        "To move rapidly and lightly", "Having lived or existed for a relatively long time", "Full of energy and enthusiasm", "Able to move quickly and easily", "Physical strength in contrast to intelligence",
        "Firm and crisp", "Excellent", "Black", "A deposit of small white ice crystals formed on the ground", "Partial or total darkness", "Large and powerful", "Jovial and playful",
        "To bend one's body and lower oneself", "Extending high in the air", "A brown color", "A comfortable or suitable position", "Done or shown openly", "Courage or determination",
        "An act of providing or supplying something", "An area of birds' nests", "Cunning or wily", "To follow or study in detail", "Not cut", "Great courage in the face of danger",
        "In a way that is extremely difficult", "The tissue in plants that conducts water and dissolved nutrients", "A sharp cry expressing pain", "To bring into a line",
        "A short period devoted to indulging in an activity to excess", "To feel a powerful desire for something", "To get rid of", "Make (someone) ecstatically happy",
        "A facial expression indicating displeasure or concentration", "A fiercely glowing or glaring look"

    ]
    const entryNumber = randomNumberInRange(1, words.length)
    return (
        [words[entryNumber], definitions[entryNumber]]
    )

}
export default Wordbank