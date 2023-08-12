const greeting = 'world';

export function hello(world: string = greeting): string {
   if (world == "WebAcademy") {
       return "Hi WebAcademy!";
   }
   return `Hello ${world}!`;
}

