export function groupAndSortTickets(
  tickets = [],
  groupBy = "status",
  sortBy = "Priority"
) {
  if (!tickets || !tickets.length) {
    return [];
  }
  const grouped = tickets.reduce((groups, ticket) => {
    const groupKey = ticket[groupBy];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(ticket);

    return groups;
  }, {});

  // Create an array of grouped tickets
  const groupedAndSorted = Object.keys(grouped).map((key) => ({
    group: key,
    tickets: grouped[key].sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0; // Default return value
    }),
  }));

  return groupedAndSorted;
}

export function getFirstAndLastLetters(inputString) {
  // Split the input string into words
  const words = inputString.trim().split(/\s+/);

  if (words.length > 0) {
    const firstWord = words[0];
    const lastWord = words[words.length - 1];

    const firstLetterOfFirstWord = firstWord[0];
    const firstLetterOfLastWord = lastWord[0];

    return [firstLetterOfFirstWord, firstLetterOfLastWord];
  } else {
    return [null, null];
  }
}

// export function groupAndSortTickets2(
//   tickets = [],
//   groupBy = "status",
//   sortBy = "Priority"
// ) {
//   const groupedAndSorted = tickets.reduce((result, ticket) => {
//     const groupKey = ticket[groupBy];

//     if (!result[groupKey]) {
//       result[groupKey] = {
//         group: groupKey,
//         tickets: [],
//       };
//     }

//     result[groupKey].tickets.push(ticket);

//     return result;
//   }, {});

//   // Sort the grouped objects
//   for (const groupKey in groupedAndSorted) {
//     groupedAndSorted[groupKey].tickets.sort((a, b) => {
//       if (sortBy === "priority") {
//         return b.priority - a.priority;
//       } else if (sortBy === "title") {
//         return a.title.localeCompare(b.title);
//       }
//       return 0; // Default return value
//     });
//   }

//   return groupedAndSorted;
// }
