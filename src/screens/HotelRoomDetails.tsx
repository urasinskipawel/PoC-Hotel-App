import React, { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const cleaningTasks = [
  'Uporządkować pościel, poduszki i koce.',
  'Wyrzucić wszystkie odpadki do kosza.',
  'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.',
  'Przetrzeć powierzchnie mebli wilgotną szmatką.',
  'Wytrzeć kurz z okien, luster i parapetów.',
  'Przetrzeć ekran i obudowę telewizora.',
  'Wyczyścić lustro ze smug i plam.',
  'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.',
  'Wyczyścić lustra w łazience.',
  'Umyć i wysuszyć szklanki i kubki.',
  'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.',
  'Wyczyścić z wnętrza ewentualne resztki lodówki/minibara.',
  'Przetrzeć przełączniki światła i gniazdka.',
  'Przetrzeć powierzchnie drzwi i klamki.',
  'Przetrzeć telefon stacjonarny lub bezprzewodowy.',
  'Sprawdzić i wyczyścić sejf, jeśli jest dostępny.',
  'Wytrzeć zewnętrzne powierzchnie klimatyzacji/grzejnika.',
  'Wyczyścić i przetrzeć wysuwane blaty, jeśli są dostępne.',
  'Uporządkować i wyczyścić ewentualne poduszki dekoracyjne.',
]

const HotelRoomDetails = () => {
  const [isCleaningStarted, setIsCleaningStarted] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [taskStatus, setTaskStatus] = useState<{ [key: string]: boolean }>({})
  const { hotelId } = useParams<{ hotelId: string }>()
  const navigate = useNavigate()
  useEffect(() => {
    if (isCleaningStarted) {
      setStartTime(Date.now())
      const interval = setInterval(() => {
        setCurrentTime(Date.now())
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isCleaningStarted])

  const handleStartCleaning = () => {
    setIsCleaningStarted(true)
  }

  const handleStopCleaning = () => {
    setIsCleaningStarted(false)
  }

  const handleStop = () => {
    setIsCleaningStarted(false)
    navigate(`/hotel/${hotelId}`)
  }
  const handleCheckboxChange = (task: string) => {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [task]: !prevStatus[task],
    }))
  }

  return (
    <div>
      {!isCleaningStarted ? (
        <Button
          variant='contained'
          color='primary'
          size='large'
          sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            fontSize: '18px',
          }}
          onClick={handleStartCleaning}
        >
          Start
        </Button>
      ) : (
        <Button
          variant='contained'
          color='primary'
          size='large'
          sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            fontSize: '18px',
          }}
          onClick={handleStop}
        >
          Stop
        </Button>
      )}
      {isCleaningStarted && (
        <Box position='absolute' top='10px' right='10px'>
          <Timer startTime={startTime} currentTime={currentTime} />
        </Box>
      )}
      {isCleaningStarted && (
        <FormControl component='fieldset' style={{ marginTop: '20px' }}>
          {cleaningTasks.map((task, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  color='primary'
                  checked={taskStatus[task] || false}
                  onChange={() => handleCheckboxChange(task)}
                />
              }
              label={task}
            />
          ))}
        </FormControl>
      )}
    </div>
  )
}

export default HotelRoomDetails

const Timer = ({
  startTime,
  currentTime,
}: {
  startTime: number
  currentTime: number
}) => {
  const elapsedTime = Math.floor((currentTime - startTime) / 1000)
  const minutes = Math.floor(elapsedTime / 60)
  const seconds = elapsedTime % 60

  return (
    <div>
      Czas: {minutes < 10 ? '0' : ''}
      {minutes}:{seconds < 10 ? '0' : ''}
      {seconds}
    </div>
  )
}
