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
        "to tolerate or endure", "so lacking in originality as to be obvious and boring", "having or showing shrewdness and good judgment",
        "to publicly denounce", "full of energy and enthusiasm", "a short story typically with animals as characters", "excessively talkative",
        "a settled or regular tendency or practice", "in an icy manner", "tired or bored", "the sum of a person's actions in this and previous states of existence",
        "a device for holding a door or gate closed", "great merriment", "the lowest point in the fortunes of a person or organization", "a fertile spot in a desert where water is found",
        "the quality of being religious or reverent", "to put an end to", "the quality of being extremely thorough and careful", "a shade of black", "delayed beyond the expected time",
        "to take a position of power illegally or by force", "producing powerful feelings or strong, clear images in the mind", "showing or characterized by quick and inventive verbal humor",
        "a chemical element with symbol Xe", "to produce or provide", "having a strong, pleasant, and somewhat spicy flavor", "sharp or severe in effect", "to deceive or trick",
        "an activity involving skill in making things by hand", "curious or unusual in a way that provokes dry amusement", "strongly wanting to do or have something",
        "to dwell on one's own success or another's misfortune with smugness", "widespread destruction", "satisfying one's conception of what is perfect", "deliciously sweet", "a dishonest or unscrupulous man",
        "cautious or wary due to realistic suspicions", "a concise statement of a general truth", "making a lot of noise", "made of or resembling oak wood", "a small bag or pouch",
        "a question", "to occur again periodically or repeatedly", "a woman of violent temper and speech", "to diminish or reduce in thickness towards one end", "complete",
        "physical strength and good health", "made by weaving", "adapted to a dry habitat", "to have an intense feeling of longing for something", "related to or resembling a zone",
        "on foot", "marked by rapidity and efficiency", "the power or quality of giving delight", "to pour a liquid over", "brilliant display or effect", "to throw or hurl forcefully",
        "to shine with a steady but subdued light", "done or acting with excessive speed or urgency", "a hard, creamy-white substance composing the tusks of elephants", "nervous and unable to relax",
        "a small hill or mound", "gracefully thin", "a person who hoards wealth and spends as little money as possible", "particularly good, skillful, or effective", "to hold or express an opinion",
        "likely to or liable to suffer from, do, or experience something", "a peculiar aspect of a person's character or behavior", "to claim or prove that evidence or an accusation is false",
        "disdainfully or ironically humorous", "a collection of valuable items", "not in good physical or mental condition", "of uncertain, indefinite, or unclear character or meaning",
        "to move rapidly and lightly", "having lived or existed for a relatively long time", "full of energy and enthusiasm", "able to move quickly and easily", "physical strength in contrast to intelligence",
        "firm and crisp", "excellent", "black", "a deposit of small white ice crystals formed on the ground", "partial or total darkness", "large and powerful", "jovial and playful",
        "to bend one's body and lower oneself", "extending high in the air", "a brown color", "a comfortable or suitable position", "done or shown openly", "courage or determination",
        "an act of providing or supplying something", "an area of birds' nests", "cunning or wily", "to follow or study in detail", "not cut", "great courage in the face of danger",
        "in a way that is extremely difficult", "the tissue in plants that conducts water and dissolved nutrients", "a sharp cry expressing pain", "to bring into a line",
        "a short period devoted to indulging in an activity to excess", "to feel a powerful desire for something", "to get rid of", "make (someone) ecstatically happy",
        "a facial expression indicating displeasure or concentration", "a fiercely glowing or glaring look"
    ]
    const entryNumber = randomNumberInRange(1, words.length)
    return (
        [words[entryNumber], definitions[entryNumber]]
    )

}
export default Wordbank