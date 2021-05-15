const axios = require('axios');

const url = "https://game.leethack.ninja/challenge/knobby-navajowhite-baldeagle/kiosk/getAll"

const allItems = [
  '922d17e4-fbc6-4a6a-94a9-d5885a20843b,Snockers',
  'c10b90c1-1bf4-47b9-93f1-2f0453fc2b08,Plepp',
  "8357cb09-2c56-4cd4-9251-fe3396ee322a,Ali's Bilar",
  'f3043216-44df-4bf4-a00d-4804b4f7d8f9,Curry Worries',
  '0b7824c2-7edb-49b8-9124-e759da1338cf,Twanky',
  "af09b788-63c2-43e3-b7d5-f59884b10a01,Horsey's Bar",
  '7f06a435-061d-416e-9538-97c6605df18e,Banana Kid',
  '6623e904-84a2-4342-ad2d-37c3601745f6,Batterfinger',
  '41353fa3-b8a0-490d-a74c-808b5c103239,Andromeda',
  'c206fd92-5153-47e0-9515-70bb1fc09daf,Dig Dog',
  '4dbebc5b-7b49-4606-be57-a5e50bc2201d,Crank Bar',
  '01ee18f9-9b58-4448-8a75-e7f317ed86f0,Almond Sorrow',
  'a3f38276-3499-44cc-b865-215f68ebfd55,Twerk',
  'dcf47d05-1cbe-4778-9fff-2fd51daec4ba,Adult Egg',
  'cccfd0c1-7dd7-4774-b058-050066fd8fb1,Tasty & Mixed',
  '9e054dc8-aaf0-40b2-ad67-9c550fa4c196,Nutriyum',
  '42673751-da3f-435c-80af-86bc988563c0,Wonky bar',
  '7e6eb71f-51bb-4267-b9cc-e7276c3ad482,Chocolate Frogs',
  '0beba54d-a2b3-4a3d-8ca3-6fec2117d73f,Acid pops',
  'c32b325e-ac8d-47eb-a37d-760a2ed82895,Ferrari Roach',
  "40083492-183f-4035-89c5-1edb5b60de94,Mozart's Balls",
  '28d44b25-24a0-41ed-99cb-836e66f9623c,Full stop',
  'ae5aa050-5586-44ac-8fae-ee0cd53ecbbd,Jelly Adults',
  '4cbf31eb-ca61-44b7-92cc-e9e2f4c57e35,Werners Original',
  "a07a58e7-9f1e-4ff1-808b-3e1e7d15e127,Totti's Frotti",
  '53dd88d4-8d1a-4941-b482-1355c5dc7dd9,Swedish Färs',
  'f6e58868-97e2-45e1-88a8-6933fae6bef6,Tiblerawn',
  '5ea7614d-b232-403d-8317-5e9264057963,Sweet cat',
  '011026d0-bcd0-45a9-8aea-447f124a1267,Jungle Shouting',
  'fb84f582-3aa9-4269-88a7-319aead65e7f,Marianus',
  "9c88178a-2946-4539-a318-4d7372b7de11,Molly's teasers",
  '95f17280-0073-4802-8ed0-b30c25cd667d,Resins',
  '9263a20e-5396-43fc-b132-aef369a1f720,Pelly',
  'd434f530-f23e-4a96-a427-4e7fe5827660,Sun Pie',
  'cd0f10ba-ea72-438e-8bf5-0acd8588dab8,Hägen Glass',
  "f0b0e7fe-ec41-4376-a25e-737d7b16c6ea,Jen & Marie's",
  'e18ab9f3-3315-4d81-b042-8b56b868c885,Magnus',
  'e370c01d-4328-4ed9-a6c4-6946eedfd8e1,Basket Robber',
  '54809329-c5cb-4473-8ac0-cdeb4b4b4cb7,Wine ETA',
  '0e2c4684-b48a-41a0-bc42-6320585ff2e3,Tap tap',
  '9fb010e0-7d89-4a3a-84a5-be61adfe3492,Licorice Pock',
  'e23b747c-8996-429c-9618-35ea8c79bd77,Palicco',
  '50800052-79dd-4f39-a0f1-3aef6b86f888,Bla Tire',
  'b89e79e3-6d0b-4884-b824-f230a35a76fa,Clown Face Gum Chin',
  'c5f32785-1b6f-4c34-91aa-cad8eac04e59,Ice Cream Train',
  'e59e3fa4-c82c-4e7e-9452-2ea1904364c9,Dr Lepers',
  '8ddefb24-8166-4596-b4c4-9128a15a9aa8,Dud Alcohol Free',
  '650c6362-d909-4f6b-a104-9f1a26ad7ba2,Dateraid',
  '36e4a98f-a5d2-4890-9a81-1f097d97535c,Popsi',
  'b63033da-19f9-40c4-857a-0072e0bde9a1,Dead Horse',
  'f8f87c1a-d026-47b8-b3bc-0c3a86b50c33,Budweiner',
  'd3a06d51-edc8-482e-a3c8-d90c1c5f24b4,Spite',
  '552ff244-740c-4682-994f-2ec520fdeb6e,Panta',
  '44c9f434-c199-4308-9986-e6ce7e4e969b,Kubkola',
  '1c0c8bcb-bd58-4332-a0ce-77e32628ad85,Munster',
  "6ec5b839-f37a-425c-9e2c-7abd86226452,Bedminton's"
];

const getUrl = async (id) => {

  try {
    const result = await axios.get(`https://game.leethack.ninja/challenge/knobby-navajowhite-baldeagle/kiosk/get/${id}`)
    return result.data;
  } catch (error) {
    console.log(error.data)
  }
}


(async function () {
  for await (let item of allItems) {

    const id = item.split(',')[0];

    console.log('Calling GET...')
    let [, , , number, state] = (await getUrl(id)).split(',');

    console.log('Got response from GET: ', number, state);

    let newCount = parseInt(number) || 1;

    while (state !== 'within') {

      console.log('Looping...')

      if (state === 'below') {
        newCount *= 1.8
      }

      else if (state === 'above') {
        newCount /= 2
      }

      console.log('Calling POST...', id, newCount)
      try {
        const result = await axios.post(`https://game.leethack.ninja/challenge/knobby-navajowhite-baldeagle/kiosk/update/${id}/${newCount}`);

        let [, , , postNumber, postState] = result.data.split(',')

        console.log('Got response from POST: ', postNumber, postState)

        state = postState;
        newCount = postNumber || 1;

      } catch (error) {
        console.log(error.data)
      }

    }
  }

})();