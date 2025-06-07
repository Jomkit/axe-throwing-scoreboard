"use client"

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
  name: z.string().
  min(2, {
    message: "Name must be at least 2 characters",
  }).
  max(20, {
    message: "Name too large, must be less than 50 characters",
  })
});

const StartGameForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    }
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="The Axe Man" {...field} />
            </FormControl>
            <FormDescription>
              This is your player name for a match.
            </FormDescription>
          </FormItem>
         )}
        />
        <Button type="submit" className='submitBtn'>Submit</Button>
      </form>
    </Form>
  )
}

export default StartGameForm